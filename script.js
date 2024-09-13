const catalog = [
    {
        name: 'amour',
        img: 'https://cdna.artstation.com/p/assets/images/images/010/635/776/large/artem-artificial-8-00000.jpg?1525426533',
        price: 777,
        oldPrice: 1111,
        currency: '$',
        description: 'lovely',
    },
    {
        name: 'yasuo',
        img: 'https://avatars.yandex.net/get-music-content/5413882/7f237a21.a.21609678-1/m1000x1000',
        price: 666,
        oldPrice: 2222,
        currency: '$',
        description: 'Ты того не стоишь.',
    },
    {
        name: 'killua',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QaDOA1lXrctLwGMmQ9FCY4jIT2QWvc7VLA&s',
        price: 555,
        oldPrice: 3333,
        currency: '$',
        description: 'Triple zero',
    },
    {
        name: 'Arc Warden',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c89dce4c-5380-400f-b6b9-e30603d20e73/dgvb5yc-9c325122-7e2a-499f-bb60-57bc493c8c9e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4OWRjZTRjLTUzODAtNDAwZi1iNmI5LWUzMDYwM2QyMGU3M1wvZGd2YjV5Yy05YzMyNTEyMi03ZTJhLTQ5OWYtYmI2MC01N2JjNDkzYzhjOWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X-sVHUb8SD66fJ5sFMdq12h2_dVP6lSgBqsM9QtuG-Q',
        price: 444,
        oldPrice: 4444,
        currency: '$',
        description: 'Победа сил Света.',
    },

]

const cards = document.querySelector('.cards')

catalog.forEach(card => {
    cards.innerHTML += `
        <div class="card">
            <img src=${card.img} alt="">
            <h3>${card.name}</h3>
            <p>${card.description}</p>
            <s>${card.oldPrice}</s>
            <h4>${card.price}</h4>
            <button>Купить</button>
        </div>
    `
})