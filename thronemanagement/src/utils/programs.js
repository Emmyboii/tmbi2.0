import ProgramDetails from '../Components/ProgramDetails';

export function getStoredPrograms() {
    const stored = localStorage.getItem('programsData');
    if (!stored) return ProgramDetails;

    try {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : ProgramDetails;
    } catch (error) {
        console.error('Failed to parse stored programs:', error);
        return ProgramDetails;
    }
}

export function extractCartItems(programs) {
    const categories = Array.isArray(programs) ? programs : [programs];
    const cartItems = [];

    categories.forEach((category) => {
        if (!category) return;

        if (category.addToCart) {
            cartItems.push({
                programLabel: category.programName,
                programPrice: 0,
                programImg: category.heroImg,
                projectPath: category.path,
            });
        }

        category.programDetails?.forEach((program) => {
            if (program.addToCart) {
                cartItems.push(program);
            }
        });
    });

    return cartItems;
}

export function setProgramCartState(projectPath, addToCart) {
    const updated = getStoredPrograms().map((category) => ({
        ...category,
        programDetails: category.programDetails.map((program) =>
            program.projectPath === projectPath
                ? { ...program, addToCart }
                : program
        ),
    }));

    localStorage.setItem('programsData', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
}

function shuffleArray(array) {
    return array
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);
}

export function buildSuggestedPrograms(allPrograms, addedPrograms) {
    const cartPaths = new Set(addedPrograms.map((p) => p.projectPath));
    const cartLabels = [...new Set(addedPrograms.map((p) => p.programLabel))];

    const suggestions = [];
    const addedSuggestionPaths = new Set();

    for (const label of cartLabels) {
        for (const category of allPrograms) {
            const program = category.programDetails?.find(
                (p) =>
                    p.programLabel === label &&
                    !cartPaths.has(p.projectPath) &&
                    !addedSuggestionPaths.has(p.projectPath)
            );

            if (program) {
                suggestions.push(program);
                addedSuggestionPaths.add(program.projectPath);
            }
        }
    }

    let i = 0;
    while (suggestions.length < 3 && cartLabels.length) {
        const currentLabel = cartLabels[i % cartLabels.length];

        for (const category of allPrograms) {
            const extra = category.programDetails?.find(
                (p) =>
                    p.programLabel === currentLabel &&
                    !cartPaths.has(p.projectPath) &&
                    !addedSuggestionPaths.has(p.projectPath)
            );

            if (extra) {
                suggestions.push(extra);
                addedSuggestionPaths.add(extra.projectPath);
            }
        }

        i++;
        if (i > 10) break;
    }

    return shuffleArray(suggestions).slice(0, 5);
}
