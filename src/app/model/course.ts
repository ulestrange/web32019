export interface Course {
    name: string;
    price: number;
    categories: string[];
    description: string;
    imageURL: string;
    testChange: boolean;
}

export interface CourseID extends Course {id: string}
