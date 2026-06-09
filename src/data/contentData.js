import taylorCover from '../assets/img/taylor-swift-cover.jpg';
import loverAudio from '../assets/audio/lover.mp3';
import onRepeatImg from '../assets/img/on-repeat-img.jpg';
import revealImg from '../assets/img/reveal-img.jpg';
import mainAudio1 from '../assets/audio/main-audio-1.mp3';
import mainAudio2 from '../assets/audio/main-audio-2.mp3';

export const content = {
  partnerName: "MY BABY CATHERINE",
  introText: "Tahun ini penuh cerita...",
  minutes: 1036800, // Example: 365 days * 24 * 60
  bgMusic: [mainAudio1, mainAudio2], 
  topSong: {
    title: "Here We Go Again",
    artist: "Ardhito Pramono",
    coverImg: taylorCover,
    audioUrl: loverAudio, 
  },
  topGenres: [
    { label: "Nugas lama-lama😒😒😒😒 ", val: 40, color: "bg-spotify-green" },
    { label: "Gosip with me 😋", val: 30, color: "bg-neon-pink" },
    { label: "ngajak beli makanan tpi ga jadi🤦‍♀️", val: 20, color: "bg-neon-purple" },
    { label: "NGISING 24/7 🙄", val: 10, color: "bg-neon-yellow" },
  ],
  audioAura: {
    colors: ["#FF0055", "#9146FF"],
    adjectives: ["'PSHT AURA' ", " 'CLINGY PAS ITU 🤭'"]
  },
  peakHours: {
    hours: ["07:00", "15:00", "18:00", "23:00", "12:00"],
    series: [0, 50, 1, 100, 40] // Heights relative to max
  },
  onRepeat: {
    image: onRepeatImg,
    caption: "ADE CANTIKK BGT DISINI😭😭"
  },
  futureQueue: [
    { title: "Ulang Tahun Pacar bondol Kesayangan", artist: "Sedang Berlangsung", isPlaying: true },
    { title: "Ngeramen abis dari padang🍜", artist: "Wishlist ultah" },
    { title: "Travelling Berdua!⛱️ ", artist: "from 2025 Wishlist" },
    { title: "Wisuda Bareng!! AAMINN", artist: "2027 Wishlist" },
  ],
  topArtist: {
    image: revealImg, 
    caption: "You are my #1 Person"
  }
}
