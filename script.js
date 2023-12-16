const { createApp } = Vue

createApp ({

    data() {
        return {

            activeChat: 0,

            newMessage: "",

            answer: "OK",

            search: "",

            isClicked: false,

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
                    messages: [],
                },

                {
                    name: "Giacomo",
                    img: "img/avatar-boolzap/avatar_3.jpg",
                    messages: [],
                },

                {
                    name: "Giorgio",
                    img: "img/avatar-boolzap/avatar_2.jpg",
                    messages: [],
                },
            ],

        }
    },

    methods: {

        // al click di una chat
        openChat: function(i) {
            this.activeChat = i;
            this.isClicked = true;
        },

        // input new message
        newUserMessage: function(newMessage) {
            if(this.newMessage.length > 0) {
                
                // debug
                console.log(this.contacts[this.activeChat].messages);

                this.contacts[this.activeChat].messages.push(
                    {
                        message: newMessage,
                        status: "sent",
                    }
                );
                this.newMessage= "";
            }
            
        },

        // automatic answer
        automaticAnswer: function(answer) {
            this.contacts[this.activeChat].messages.push(
                {
                    message: answer,
                    status: "received",
                }
            )
        },

        // delayedAutomaticAnswer
        delayedAutomaticAnswer: function(answer) {
            setTimeout(() => {
                this.automaticAnswer(answer);
            }, 1000);
        },

        // method that manages all the method when click enter
        handleEnterKey() {
            this.newUserMessage(this.newMessage);
            this.delayedAutomaticAnswer(this.answer);
        },

        filteredContacts: function() {
            
            this.contacts.forEach(contact => {
                contact.isVisible = !contact.name.toLowerCase().includes(this.search.toLowerCase());
            });
            
        }
        
    },

    mounted() {

    }

}).mount('#app')