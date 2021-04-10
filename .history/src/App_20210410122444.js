import './App.css';
import SearchBar from './components/SearchBar';
import ImageWrapper from './components/ImageWrapper';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <ImageWrapper/>
      <SearchBar />
      </ErrorBoundary>
    </div>
  );
}

export default App;
