export interface Defense {
    useDefense(): string;
}

export class Shield implements Defense {
    useDefense(): string {
        return 'Your shield is raised in defense *thud*';
    }
}

export class Armor implements Defense {
    useDefense(): string {
        return 'Your armor helped shield damage *clank*';
    }
}

export class Tunic implements Defense {
    useDefense(): string {
        return 'The tunic is helping all it can *not much*'
    }
}