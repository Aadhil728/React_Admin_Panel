
//menu data
export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id:1,
                title: 'Homepage',
                url: '/',
                icon: 'home.svg'
            },
            {
                id:2,
                title: 'Profile',
                url: '/users/1',
                icon: 'user.svg'
            },
        ]
    },

    {
        id: 2,
        title: "Lists",
        listItems: [
            {
                id:1,
                title: 'Users',
                url: '/users',
                icon: 'user.svg'
            },
            {
                id:2,
                title: 'Products',
                url: '/products',
                icon: 'product.svg'
            },
            {
                id:3,
                title: 'Orders',
                url: '/orders',
                icon: 'order.svg'
            },
            {
                id:4,
                title: 'Posts',
                url: '/posts',
                icon: 'post2.svg'
            },
        ]
    },

    {
        id: 3,
        title: "General",
        listItems: [
            {
                id:1,
                title: 'Elements',
                url: '/',
                icon: 'element.svg'
            },
            {
                id:2,
                title: 'Notes',
                url: '/',
                icon: 'note.svg'
            },
            {
                id:3,
                title: 'Forms',
                url: '/',
                icon: 'form.svg'
            },
        ]
    },

    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id:1,
                title: 'Settings',
                url: '/',
                icon: 'setting.svg'
            },
            {
                id:2,
                title: 'Backups',
                url: '/',
                icon: 'backup.svg'
            },
        ]
    },

    {
        id: 5,
        title: "Analytics",
        listItems: [
            {
                id:1,
                title: 'Charts',
                url: '/',
                icon: 'chart.svg'
            },
            {
                id:2,
                title: 'Logs',
                url: '/',
                icon: 'log.svg'
            },
        ]
    },
]

// top Deal Users Data
export const topDealUsers = [
    {
        id: 1,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/rajinikanth-20211216131407-5278.jpg',
        username: 'John Smith',
        email: 'john.smith@example.com',
        amount: '2500'
    },
    {
        id: 2,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/ajith-kumar-20230106104629-9755.jpg',
        username: 'Emily Davis',
        email: 'emily.davis@example.com',
        amount: '3500'
    },
    {
        id: 3,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/vijay-20230106104222-5408.jpg',
        username: 'David Johnson',
        email: 'david.johnson@example.com',
        amount: '4200'
    },
    {
        id: 4,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/kamal-haasan-20230106104702-5911.jpg',
        username: 'Sarah Brown',
        email: 'sarah.brown@example.com',
        amount: '1800'
    },
    {
        id: 5,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/suriya-sivakumar-20230106104403-2120.jpg',
        username: 'Michael Wilson',
        email: 'michael.wilson@example.com',
        amount: '3000'
    },
    {
        id: 6,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/sivakarthikeyan-20230106104503-1344.jpg',
        username: 'Jessica Lee',
        email: 'jessica.lee@example.com',
        amount: '2700'
    },
    {
        id: 7,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/dhanush-20230106104450-243.jpg',
        username: 'Christopher Miller',
        email: 'christopher.miller@example.com',
        amount: '4000'
    },
    {
        id: 8,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/silambarasan-20230106104434-6220.jpg',
        username: 'Olivia Taylor',
        email: 'olivia.taylor@example.com',
        amount: '3100'
    },
]

// chartBox User Data
export const chartBoxUser = {
    color: '#884db',
    icon: '/userIcon.svg',
    title: 'Total Users',
    number: '11.238',
    dataKey: 'users',
    percentage: 45,
    duration: 'This Month',
    chartData: [
        { name: 'Sun', users: 1398 },
        { name: 'Mon', users: 1398 },
        { name: 'Tue', users: 9800 },
        { name: 'Wed', users: 3908 },
        { name: 'Thu', users: 4800 },
        { name: 'Fri', users: 3800 },        
        { name: 'Sat', users: 4300 },
    ]
}

// chartBox Conversion Data
export const chartBoxConversion = {
    color: 'gold',
    icon: '/conversionIcon.svg',
    title: 'Total Ratio',
    number: '2.6',
    dataKey: 'conversion',
    percentage: 12,
    duration: 'This Month',
    chartData: [
        { name: 'Sun', conversion: 1398 },
        { name: 'Mon', conversion: 1398 },
        { name: 'Tue', conversion: 9800 },
        { name: 'Wed', conversion: 3908 },
        { name: 'Thu', conversion: 4800 },
        { name: 'Fri', conversion: 3800 },        
        { name: 'Sat', conversion: 4300 },
    ]
}

// chartBox Revenue Data
export const chartBoxRevenue = {
    color: 'lightgreen',
    icon: '/revenueIcon.svg',
    title: 'Total Revenue',
    number: '$56.432',
    dataKey: 'revenue',
    percentage: -12,
    duration: 'This Month',
    chartData: [
        { name: 'Sun', revenue: 1398 },
        { name: 'Mon', revenue: 1398 },
        { name: 'Tue', revenue: 9800 },
        { name: 'Wed', revenue: 3908 },
        { name: 'Thu', revenue: 4800 },
        { name: 'Fri', revenue: 3800 },        
        { name: 'Sat', revenue: 4300 },
    ]
}

// chartBox Product Data
export const chartBoxProduct = {
    color: 'skyblue',
    icon: '/productIcon.svg',
    title: 'Total Products',
    number: '238',
    dataKey: 'product',
    percentage: 21,
    duration: 'This Month',
    chartData: [
        { name: 'Sun', product: 1398 },
        { name: 'Mon', product: 1398 },
        { name: 'Tue', product: 9800 },
        { name: 'Wed', product: 3908 },
        { name: 'Thu', product: 4800 },
        { name: 'Fri', product: 3800 },        
        { name: 'Sat', product: 4300 },
    ]
}

// Bar chartBoxVisit Data
export const barChartBoxVisit = {
    title: 'Total Visit',
    color: '#ff8042',
    dataKey: 'visit',
    chartData: [
        {
            name: 'Sun',
            visit: '4000'
        },
        {
            name: 'Mon',
            visit: '3000'
        },
        {
            name: 'Tue',
            visit: '2000'
        },
        {
            name: 'Wed',
            visit: '1000'
        },
        {
            name: 'Thur',
            visit: '1890'
        },
        {
            name: 'Fri',
            visit: '2390'
        },
        {
            name: 'Sat',
            visit: '3490'
        },
    ]
}

// Bar chartBoxRevenue Data
export const barChartBoxRevenue = {
    title: 'Total Revenue',
    color: '#8884db',
    dataKey: 'revenue',
    chartData: [
        {
            name: 'Sun',
            revenue: '4000'
        },
        {
            name: 'Mon',
            revenue: '3000'
        },
        {
            name: 'Tue',
            revenue: '2000'
        },
        {
            name: 'Wed',
            revenue: '1000'
        },
        {
            name: 'Thur',
            revenue: '1890'
        },
        {
            name: 'Fri',
            revenue: '2390'
        },
        {
            name: 'Sat',
            revenue: '3490'
        },
    ]
}


// Users Table Data
export const userRows = [
    {
        id: 1,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/rajinikanth-20211216131407-5278.jpg',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@example.com',
        phone: '123 456 789',
        createdAt: '01.02.2023',
        verified: true,
    },
    {
        id: 2,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/ajith-kumar-20230106104629-9755.jpg',
        firstName: 'Emily ',
        lastName: 'Davis',
        email: 'emily.davis@example.com',
        phone: '123 456 789',
        createdAt: '01.02.2023',
        verified: false,
    },
    {
        id: 3,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/vijay-20230106104222-5408.jpg',
        firstName: 'David ',
        lastName: 'Johnson',
        email: 'david.johnson@example.com',
        phone: '123 456 789',
        createdAt: '01.02.2023',
        verified: true,
    },
    {
        id: 4,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/kamal-haasan-20230106104702-5911.jpg',
        firstName: 'Sarah ',
        lastName: 'Brown',
        email: 'sarah.brown@example.com',
        phone: '123 456 789',
        createdAt: '01.02.2023',
        verified: false,
    },
    {
        id: 5,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/suriya-sivakumar-20230106104403-2120.jpg',
        firstName: 'Michael ',
        lastName: 'Wilson',
        email: 'michael.wilson@example.com',
        phone: '123 456 789',
        createdAt: '01.02.2023',
        verified: true,
    },
    {
        id: 6,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/sivakarthikeyan-20230106104503-1344.jpg',
        firstName: 'Jessica ',
        lastName: 'Lee',
        email: 'jessica.lee@example.com',
        phone: '123 456 789',
        createdAt: '01.02.2023',
        verified: false,
    },
    {
        id: 7,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/dhanush-20230106104450-243.jpg',
        firstName: 'Christopher ',
        lastName: 'Miller',
        email: 'christopher.miller@example.com',
        phone: '123 456 789',
        createdAt: '01.02.2023',
        verified: true,
    },
    {
        id: 8,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/silambarasan-20230106104434-6220.jpg',
        firstName: 'Olivia ',
        lastName: 'Taylor',
        email: 'olivia.taylor@example.com',
        phone: '123 456 789',
        createdAt: '01.02.2023',
        verified: true,
    },
]

// Product Table Data
export const productRows = [
    {
        id: 1,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/rajinikanth-20211216131407-5278.jpg',
        title: 'John',
        color: 'red',
        producer: 'john.smith@example.com',
        price: '123 456 789',
        createdAt: '01.02.2023',
        inStock: true,
    },
    {
        id: 2,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/ajith-kumar-20230106104629-9755.jpg',
        title: 'Emily ',
        color: 'orange',
        producer: 'emily.davis@example.com',
        price: '123 456 789',
        createdAt: '01.02.2023',
        inStock: false,
    },
    {
        id: 3,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/vijay-20230106104222-5408.jpg',
        title: 'David ',
        color: 'yellow',
        producer: 'david.johnson@example.com',
        price: '123 456 789',
        createdAt: '01.02.2023',
        inStock: true,
    },
    {
        id: 4,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/kamal-haasan-20230106104702-5911.jpg',
        title: 'Sarah ',
        color: 'green',
        producer: 'sarah.brown@example.com',
        price: '123 456 789',
        createdAt: '01.02.2023',
        inStock: false,
    },
    {
        id: 5,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/suriya-sivakumar-20230106104403-2120.jpg',
        title: 'Michael ',
        color: 'blue',
        producer: 'michael.wilson@example.com',
        price: '123 456 789',
        createdAt: '01.02.2023',
        inStock: true,
    },
    {
        id: 6,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/sivakarthikeyan-20230106104503-1344.jpg',
        title: 'Jessica ',
        color: 'purple',
        producer: 'jessica.lee@example.com',
        price: '123 456 789',
        createdAt: '01.02.2023',
        inStock: false,
    },
    {
        id: 7,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/dhanush-20230106104450-243.jpg',
        title: 'Christopher ',
        color: 'pink',
        producer: 'christopher.miller@example.com',
        price: '123 456 789',
        createdAt: '01.02.2023',
        inStock: true,
    },
    {
        id: 8,
        img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/silambarasan-20230106104434-6220.jpg',
        title: 'Olivia ',
        color: 'brown',
        producer: 'olivia.taylor@example.com',
        price: '123 456 789',
        createdAt: '01.02.2023',
        inStock: true,
    },
]


//Single component user Data
export const singleUserData = {
    id:1,
    title: 'John Doe',
    img: 'https://www.filmibeat.com/img/600x90x338/popcorn/list_items/silambarasan-20230106104434-6220.jpg',
    info: 
    {
        username: 'Johndoee99',
        fullname: 'John Doe',
        email: 'john.smith@example.com',
        phone: '123 456 789',
        status: 'verified',
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884db" },
        ],
        data: [
            { name: "Sun", visits: 4000, clicks: 4300 },
            { name: "Mon", visits: 3000, clicks: 3300 },
            { name: "Tue", visits: 2000, clicks: 2500 },
            { name: "Wed", visits: 4500, clicks: 1800 },
            { name: "Thu", visits: 3900, clicks: 1900 },
            { name: "Fri", visits: 4800, clicks: 1800 },
            { name: "Sat", visits: 4700, clicks: 1200 },
        ]
    },
    activities: [
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
    ]
}

//Single component Product Data
export const singleProductData = {
    id:1,
    title: 'Playstation 5 Digital Edition',
    img: 'https://media.direct.playstation.com/is/image/sierialto/PS5-digital-edition-front-with-dualsense?$Background_Large$',
    info: 
    {
        productId: 'Ps5',
        color: 'white',
        price: '$250.99',
        producer: 'Sony',
        export: 'Japan',
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "orders", color: "#8884db" },
        ],
        data: [
            { name: "Sun", visits: 4000, orders: 4300 },
            { name: "Mon", visits: 3000, orders: 3300 },
            { name: "Tue", visits: 2000, orders: 2500 },
            { name: "Wed", visits: 4500, orders: 1800 },
            { name: "Thu", visits: 3900, orders: 1900 },
            { name: "Fri", visits: 4800, orders: 1800 },
            { name: "Sat", visits: 4700, orders: 1200 },
        ]
    },
    activities: [
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
        {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum',
            time: '3 day ago',
        },
    ]
}


