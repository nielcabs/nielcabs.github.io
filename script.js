new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        
        {
          name: "Mahika",
          artist: "Adie",
          cover: "Cover/mahika.jfif",
          source: "Songs/mahika.mp3",
          url: "https://www.youtube.com/watch?v=9tLglpFAyIg",
          favorited: true
        },
        {
          name: "All Songs of Arthur Nery",
          artist: "Arthur Nery",
          cover: "Cover/arthur.jfif",
          source: "Songs/Arthur_Bundles.mp3",
          url: "https://www.youtube.com/watch?v=q0pbzL2Zwio",
          favorited: true
        },
        {
          name: "Araw - Araw",
          artist: "Ben & Ben",
          cover: "Cover/1.jpg",
          source: "Songs/1.mp3",
          url: "https://www.youtube.com/watch?v=XVhEm62Uqog",
          favorited: false
        },
        {
          name: "Kathang - Isip",
          artist: "Ben & Ben",
          cover: "Cover/2.jfif",
          source: "Songs/2.mp3",
          url: "https://www.youtube.com/watch?v=sKa8HtWgOxk",
          favorited: false
        },
        {
          name: "Sa Susunod na Habang Buhay",
          artist: "Ben & Ben",
          cover: "Cover/3.jfif",
          source: "Songs/3.mp3",
          url: "https://www.youtube.com/watch?v=eTUn_tbwYIw",
          favorited: false
        },
        {
          name: "Maybe The Night",
          artist: "Ben & Ben",
          cover: "Cover/4.jpg",
          source: "Songs/4.mp3",
          url: "https://www.youtube.com/watch?v=hJhVURhdLEg",
          favorited: false
        },
        {
          name: "Ride Home",
          artist: "Ben & Ben",
          cover: "Cover/5.jfif",
          source: "Songs/5.mp3",
          url: "https://www.youtube.com/watch?v=QlMLU6aze04",
          favorited: false
        },
        {
          name: "Bibingka",
          artist: "Ben & Ben",
          cover: "Cover/6.jfif",
          source: "Songs/6.mp3",
          url: "https://www.youtube.com/watch?v=AIRCTJREWKM",
          favorited: false
        },
        {
          name: "Lifetime",
          artist: "Ben & Ben",
          cover: "Cover/7.jfif",
          source: "Songs/7.mp3",
          url: "https://www.youtube.com/watch?v=oxsY8GvoQQE",
          favorited: false
        },
        {
          name: "Make it with you",
          artist: "Ben & Ben",
          cover: "Cover/8.jfif",
          source: "Songs/8.mp3",
          url: "https://www.youtube.com/watch?v=rMbWwFSrotI",
          favorited: false
        },
        {
          name: "Masyado pang Maaga",
          artist: "Ben & Ben",
          cover: "Cover/9.jfif",
          source: "Songs/9.mp3",
          url: "https://www.youtube.com/watch?v=-6FoVayjJdw",
          favorited: false
        },
        {
          name: "Di Ka Sayang",
          artist: "Ben & Ben",
          cover: "Cover/10.jfif",
          source: "Songs/10.mp3",
          url: "https://www.youtube.com/watch?v=aIj2ndUEib8",
          favorited: false
        },
        {
          name: "Leaves",
          artist: "Ben & Ben",
          cover: "Cover/11.jfif",
          source: "Songs/11.mp3",
          url: "https://www.youtube.com/watch?v=5oxxi0d7AQI",
          favorited: false
        },
        {
          name: "Upuan",
          artist: "Ben & Ben",
          cover: "Cover/12.jfif",
          source: "Songs/12.mp3",
          url: "https://www.youtube.com/watch?v=Tscl1OFYTLQ",
          favorited: false
        },
        {
          name: "Paninindigan Kita",
          artist: "Ben & Ben",
          cover: "Cover/13.jfif",
          source: "Songs/13.mp3",
          url: "https://www.youtube.com/watch?v=EMSAEKeloC8",
          favorited: false
        },
        {
          name: "Baka Sakali",
          artist: "Ben & Ben",
          cover: "Cover/14.jpg",
          source: "Songs/14.mp3",
          url: "https://www.youtube.com/watch?v=vc_3BUKK4BQ",
          favorited: false
        },
        {
          name: "Pagtingin",
          artist: "Ben & Ben",
          cover: "Cover/15.jfif",
          source: "Songs/15.mp3",
          url: "https://www.youtube.com/watch?v=vc_3BUKK4BQ",
          favorited: false
        },
        {
          name: "Lang yang Pagibig",
          artist: "Ben & Ben",
          cover: "Cover/16.jfif",
          source: "Songs/16.mp3",
          url: "https://www.youtube.com/watch?v=JWmh_jdugzQ",
          favorited: false
        },
        {
          name: "Elyu",
          artist: "Ben & Ben",
          cover: "Cover/17.jfif",
          source: "Songs/17.mp3",
          url: "https://www.youtube.com/watch?v=WhmQvF9aKVU",
          favorited: false
        },
        {
          name: "Pasalubong",
          artist: "Ben & Ben",
          cover: "Cover/18.jfif",
          source: "Songs/18.mp3",
          url: "https://www.youtube.com/watch?v=KTsuBfEw8Zo",
          favorited: false
        },
        {
          name: "Lunod",
          artist: "Ben & Ben",
          cover: "Cover/19.jfif",
          source: "Songs/19.mp3",
          url: "https://www.youtube.com/watch?v=lajkFB4Zeug",
          favorited: false
        },
        {
          name: "Lunod",
          artist: "Ben & Ben",
          cover: "Cover/19.jfif",
          source: "Songs/19.mp3",
          url: "https://www.youtube.com/watch?v=lajkFB4Zeug",
          favorited: false
        },
        {
          name: "Sugar",
          artist: "Ben & Ben Ft. Munimuni",
          cover: "Cover/20.jfif",
          source: "Songs/20.mp3",
          url: "https://www.youtube.com/watch?v=LprUESAcasw",
          favorited: false
        },
        {
          name: "Paalam",
          artist: "Ben & Ben x Moira Dela Torre",
          cover: "Cover/21.jfif",
          source: "Songs/21.mp3",
          url: "https://www.youtube.com/watch?v=nSKqzEoEv_E",
          favorited: false
        },
        {
          name: "Kapangyarihan",
          artist: "Ben & Ben Ft. SB19",
          cover: "Cover/22.jfif",
          source: "Songs/22.mp3",
          url: "https://www.youtube.com/watch?v=VrkxGbtJB6E",
          favorited: false
        },
        {
          name: "Susi",
          artist: "Ben & Ben",
          cover: "Cover/23.jfif",
          source: "Songs/23.mp3",
          url: "https://www.youtube.com/watch?v=UoFS4sekr9s",
          favorited: false
        },
        {
          name: "Nakikinig ka ba sakin",
          artist: "Ben & Ben",
          cover: "Cover/24.jfif",
          source: "Songs/24.mp3",
          url: "https://www.youtube.com/watch?v=P2BhsHX7EqM",
          favorited: false
        },
        {
          name: "Mitsa",
          artist: "Ben & Ben",
          cover: "Cover/25.jfif",
          source: "Songs/25.mp3",
          url: "https://www.youtube.com/watch?v=pbfMhYVy-yM",
          favorited: false
        },
        {
          name: "Magpahinga",
          artist: "Ben & Ben",
          cover: "Cover/26.jfif",
          source: "Songs/26.mp3",
          url: "https://www.youtube.com/watch?v=kDyaZcfZHws",
          favorited: false
        },
        {
          name: "Kayumanggi",
          artist: "Ben & Ben",
          cover: "Cover/27.jfif",
          source: "Songs/27.mp3",
          url: "https://www.youtube.com/watch?v=uSldLPg9ZtQ",
          favorited: false
        },
        {
          name: "Ilang tulog na lang",
          artist: "Ben & Ben",
          cover: "Cover/28.jfif",
          source: "Songs/28.mp3",
          url: "https://www.youtube.com/watch?v=OCasWcEcUgg",
          favorited: false
        },
        {
          name: "Kasayaw",
          artist: "Ben & Ben",
          cover: "Cover/29.jfif",
          source: "Songs/29.mp3",
          url: "https://www.youtube.com/watch?v=SyVyzVRLwzY",
          favorited: false
        },
        {
          name: "Swimming Pool",
          artist: "Ben & Ben Ft. Chito Miranda",
          cover: "Cover/30.jfif",
          source: "Songs/30.mp3",
          url: "hthttps://www.youtube.com/watch?v=HVzsO7XYm5Y",
          favorited: false
        },
        {
          name: "Doors",
          artist: "Ben & Ben",
          cover: "Cover/31.jfif",
          source: "Songs/31.mp3",
          url: "https://www.youtube.com/watch?v=RHoz72OOsZE",
          favorited: false
        },
        {
          name: "Kuwarderno",
          artist: "Ben & Ben",
          cover: "Cover/32.jfif",
          source: "Songs/32.mp3",
          url: "https://www.youtube.com/watch?v=2vYjg4uBKM8",
          favorited: false
        },
        {
          name: "Sabel",
          artist: "Ben & Ben Ft. KZ Tandingan",
          cover: "Cover/33.jfif",
          source: "Songs/33.mp3",
          url: "https://www.youtube.com/watch?v=pb4bewZdj0w",
          favorited: false
        },
        {
          name: "Sunrise",
          artist: "Ben & Ben",
          cover: "Cover/34.jfif",
          source: "Songs/34.mp3",
          url: "https://www.youtube.com/watch?v=32DHPqQErdk",
          favorited: false
        },
        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
