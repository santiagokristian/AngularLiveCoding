export enum statusType {
    listed = 'Listed',
    exam = 'Examining',
    fbth = 'Finally Back to Human'
}

export interface PetDetail {
    id: number;
    name: string;
    status: statusType;
}