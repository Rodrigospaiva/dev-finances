const modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
            },
    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [ {
    id: 0,
    description: Freelance,
    amount: 900000,
    date: '20/08/2021',
    },
    {
    id: 1,
    description: Aluguel,
    amount: -70000,
    date: '20/08/2021',
    },
    {
    id: 2,
    description: Luz,
    amount: -10000,
    date: '20/08/2021',
    },
    {
    id: 3,
    description: Internet,
    amount: -10000,
    date: '20/08/2021',
    },
    {
    id: 4,
    description: Alice,
    amount: -100000,
    date: '20/08/2021',
    },
]

// const Balance {
//     Income() {

//     }
// }