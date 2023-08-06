import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GalleryImages from './components/GalleryImages';

function App() {
  return (
    <div>
     <GalleryHeader />
      <GalleryImages />
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
