const { createApp } = Vue

createApp ({

    data() {
        return {

            activeChat: 0,

            newMessage: "",

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
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
            
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

        // al click di una chat
        openChat: function(i) {
            this.activeChat = i;
        },

        // input new message
        newUserMessage: function(newMessage) {
            if(this.newMessage.length > 0) {
                this.contacts[this.activeChat].messages.push(
                    {
                        message: newMessage,
                        status: "sent",
                    }
                );
                this.newMessage= "";
            }
            
        }

    },

    mounted() {

    }

}).mount('#app')