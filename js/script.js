

const { createApp } = Vue

createApp({
    data() {
        return {

            // mi salvo una variabile dove memorizzo quale sia la slide attiva
            activeSlideIndex: 0,



            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],


            timer: null
        }


    },

    // bonus
    mounted() {
        this.startTimer();

    },
    // fine bonus

    methods: {
        nextSlide() {
            this.activeSlideIndex++;
            // Controllo che l'indice non vada oltre l'ultima immagine
            if (this.activeSlideIndex >= this.slides.length) {
                this.activeSlideIndex = 0;
            }

        },

        prevSlide() {
            this.activeSlideIndex--;
            // Controllo che l'indice non vada oltre lo zero 
            if (this.activeSlideIndex < 0) {
                this.activeSlideIndex = this.slides.length - 1;
            }
        },

         // bonus

        // metodo per attvare il click sulle mmagini thumbnail
        changeSlide(index) {
            console.log(index)
            this.activeSlideIndex = index
        },

        //funzione per ciclare le immagini ogni 3 sec
        startTimer() {
            this.timer = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },

        // funzione per terminare il ciclo di immagini
        stopTimer() {
            clearInterval(this.timer);
        },
    
        // fine bonus










    }
}).mount('#app');