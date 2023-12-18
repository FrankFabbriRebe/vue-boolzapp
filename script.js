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
                    invisible: false,
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
                    invisible: false,
                    messages: [],
                },

                {
                    name: "Giacomo",
                    img: "img/avatar-boolzap/avatar_3.jpg",
                    invisible: false,
                    messages: [],
                },

                {
                    name: "Giorgio",
                    img: "img/avatar-boolzap/avatar_2.jpg",
                    invisible: false,
                    messages: [],
                },
            ],

        }
    },

    methods: {

        // al click di una chat
        openChat: function(i) {
            this.activeChat = i;
           
            this.contacts.forEach((contact, index) => {
                if (index === i) {
                  contact.isActive = true;
                } else {
                  contact.isActive = false;
                }
              });
        },

        // input new message
        newUserMessage: function(newMessage) {

            // all this method works only if this.newMessage.length > 0
            if(this.newMessage.length > 0) {
                
                // add newMessage to messages array
                this.contacts[this.activeChat].messages.push(
                    {
                        message: newMessage,
                        status: "sent",
                    }
                );

                // call method to get with delay the automatic answer
                setTimeout(() => {
                    this.automaticAnswer(this.answer);
                }, 1000);
                
                // empty the newMessage input
                this.newMessage= "";
            }
        
        },

        // method to get automatic answer
        automaticAnswer: function(answer) {

            this.contacts[this.activeChat].messages.push(
                {
                    message: answer,
                    status: "received",
                }
            )

        },

        // method filter contacts based on search
        filteredContacts: function() {
            
            this.contacts.forEach(contact => {
                contact.invisible = !contact.name.toLowerCase().includes(this.search.toLowerCase());
            });
            
        }
        
    },

    mounted() {

    }

}).mount('#app')