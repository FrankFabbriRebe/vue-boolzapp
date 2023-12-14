const { createApp } = Vue

createApp ({

    data() {
        return {

            // oggetto mio profilo
            myProfile: {

                name: "Franesco",
                img: "img/avatar-boolzap/avatar_1.jpg",

            },

            // array of contacts
            contacts: [
                {
                    name: "Paola",
                    img: "img/avatar-boolzap/avatar_5.jpg",
                },

                {
                    name: "Mario",
                    img: "img/avatar-boolzap/avatar_4.jpg",
                },

                {
                    name: "Giacomo",
                    img: "img/avatar-boolzap/avatar_3.jpg",
                },

                {
                    name: "Giorgio",
                    img: "img/avatar-boolzap/avatar_2.jpg",
                },
            ],

        }
    },

    methods: {

    },

    mounted() {

    }

}).mount('#app')