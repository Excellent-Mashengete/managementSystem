module.exports = {
    content: ['./src/**/*.{html,js,ts}',
    './components/navbar/*.{html,js}',
    './components/footer/*.{html,js}'],
    plugins: [require('daisyui')],
    darkMode: true,
    daisyui:{
        themes:["light", "dark","cupcake","garden","winter","lemonade", "night"],
        darkTheme: "dark",
    },
};