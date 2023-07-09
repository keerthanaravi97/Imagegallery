import MYGallery from './components/MYGallery';
import './App.css';

function App() {

  const galleryImages = [
    {
      img: "https://th.bing.com/th/id/OIP.FYYaYGaNoHrlneB1Ubm8cAHaHa?pid=ImgDet&w=188&h=188&c=7&dpr=1.4"
    },
    {
      img: "https://i.pinimg.com/originals/7e/8a/44/7e8a4487a63150d4e9360a378c869b97.jpg"
    },
    {
      img: "https://pldzimages.s3.amazonaws.com/products/2644562.png"
    },
    {
      img: "https://i0.wp.com/bfblogger.com/wp-content/uploads/2017/12/main-thumb-t-247951-200-dhbpeffmigflkubgghgsahudfsvnynra.jpeg?resize=449%2C449&ssl=1"
    },
    {
      img: "https://wallpapercave.com/wp/wp4267366.jpg"
    },
    {
      img: "https://cdn.quotesgram.com/img/50/33/1949478903-92f07e9a472791e2a0b51cd9f8d2599f.jpg"
    }
  ]

  return (
    <div className="App">
      <br />
      <div class="galleryTitle"> 
        <strong>IMAGE GALLERY</strong>
      </div>
      <br /><br />

      <MYGallery
        galleryImages={galleryImages}
      />

      <br /><br />
      
    </div>
  );
}

export default App;
