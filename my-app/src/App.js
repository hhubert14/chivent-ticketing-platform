import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catelog from './pages/Catelog';
import EventPage from './pages/EventPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Catelog />} />
				<Route path="/event" element={<EventPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
