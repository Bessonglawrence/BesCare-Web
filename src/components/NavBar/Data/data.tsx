export interface Carer {
    id: number;
    name: string;
    //daysInShift: number;
    address: string;
    gender: 'Male' | 'Female' | 'Other';
    email: string;
    phoneNumber: string;
    startDate: string; // ISO date string
    dateOfBirth: string; // ISO date string
}

export const carers: Carer[] = [
    {
        id: 1,
        name: "Alice Johnson",
        address: "123 Main St, London, UK",
        gender: "Female",
        email: "alice.johnson@example.com",
        phoneNumber: "+44 1234 567890",
        startDate: "2023-01-15",
        dateOfBirth: "1990-06-12",
    },
    {
        id: 2,
        name: "Michael Smith",
        address: "456 Elm St, Manchester, UK",
        gender: "Male",
        email: "michael.smith@example.com",
        phoneNumber: "+44 2345 678901",
        startDate: "2022-09-10",
        dateOfBirth: "1985-11-23",
    },
    {
        id: 3,
        name: "Sophie Lee",
        address: "789 Oak St, Birmingham, UK",
        gender: "Female",
        email: "sophie.lee@example.com",
        phoneNumber: "+44 3456 789012",
        startDate: "2021-05-20",
        dateOfBirth: "1992-03-18",
    },
    {
        id: 4,
        name: "James Brown",
        address: "321 Pine St, Liverpool, UK",
        gender: "Male",
        email: "james.brown@example.com",
        phoneNumber: "+44 4567 890123",
        startDate: "2020-11-01",
        dateOfBirth: "1988-08-30",
    },
    {
        id: 5,
        name: "Emma Wilson",
        address: "654 Maple St, Bristol, UK",
        gender: "Female",
        email: "emma.wilson@example.com",
        phoneNumber: "+44 5678 901234",
        startDate: "2019-07-12",
        dateOfBirth: "1995-12-05",
    },
];