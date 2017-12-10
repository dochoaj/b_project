import React, {Component} from 'react';
import './App.css';
import { Router, Route, browserHistory } from 'react-router'
import PlatformSection from '../components/PlatformSection/PlatformSection';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import GameView from '../components/GameView/GameView';
import NavBar from '../components/NavBar/NavBar';
import AdminSideBar from '../components/AdminSideBar/AdminSideBar';


class App extends Component {

	state = {
		test_platform: [
			{titlePlatform:"xbox", cards: [{title: 'My title',description: 'My description'}]}
		],
		platforms: [

			{id: 'play4', title:'play 4',
			imgPlatform:"https://logodownload.org/wp-content/uploads/2017/05/playstation-4-logo-ps4-8.png",
			cards: [
				{ title: 'My title',description: 'My description', price:"999", img:"#",url:"#" },
				{ title: 'My title 2',description: 'My description 2', price:"999", img:"#",url:"#" },
				{ title: 'My title 2',description: 'My description 2', price:"999", img:"#",url:"#" }
				]},
			{id: 'xone', title:'xbox one',
			imgPlatform:"https://cdn.worldvectorlogo.com/logos/xbox-one-3.svg",
			cards: [
			{ title: 'My title',description: 'My description', price:"999", img:"#",url:"#" },
			{ title: 'My title 2',description: 'My description 2', price:"999", img:"#",url:"#" },
			{ title: 'My title 2',description: 'My description 2', price:"999", img:"#",url:"#" }
			]},
			{id: 'nintendo', title:'nintendo',
			imgPlatform:"https://vignette3.wikia.nocookie.net/new-fantendo/images/5/5a/Nintendo_Switch_logo.png/revision/latest?cb=20161023110124&path-prefix=es",
			cards: [
				{ title: 'My title',description: 'My description', price:"999", img:"https://www.btgames.co.za/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/P/R/PR26253BI15617_N017112902011240_NS_SUPER_MARIO_ODYSSEY_SZ1.jpg",url:"#" },
				{ title: 'My title 2',description: 'My description 2', price:"999", img:"#",url:"#" },
				{ title: 'My title 2',description: 'My description 2', price:"999", img:"#",url:"#" }
				]}

		],
		
	}
	render() {
		return (
			<div className="App">
				<main>

          {/* --- BANNER --- */}
          <NavBar/>

					{/* --- SIDEBAR --- */}
					{/*<Sidebar/>*/}
          <AdminSideBar/>

					{/* --- BODY --- */}
					<main>
						<div className="col s12">
							<div className="row wrap">
								{this.buildPlatforms()}
								<GameView />
							</div>
						</div>
					</main>

					{/*
					<main>
						<div className="col s12">
							<div className="row wrap">

								<div align="center" className="card card-style">

									<div className="row">
										<img height="40px"
											src="https://logodownload.org/wp-content/uploads/2017/05/playstation-4-logo-ps4-8.png"/>
									</div>

									<div className="row">

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="https://www.dualshockers.com/wp-content/uploads/2016/07/640x960_wallpaper.jpg"/>
												</div>
												<div className="card-content">
													<p>Horizon Zero Dawn</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="https://images-na.ssl-images-amazon.com/images/I/51K%2B%2BMHWKmL.jpg"/>
												</div>
												<div className="card-content">
													<p>Call of Duty - WWII</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="http://ushuaiaplay.com.ar/wp-content/uploads/2016/02/1884575-shadow_of_the_colossus_cover.jpg"/>
												</div>
												<div className="card-content">
													<p>Shadow of the Colossus</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="https://www.3mglive.com/wp-content/uploads/Destiny-2.jpg"/>
												</div>
												<div className="card-content">
													<p>Destiny 2</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

									</div>
								</div>


								<div align="center" className="card card-style">

									<div className="row">
										<img height="40px"
												 src="https://vignette3.wikia.nocookie.net/new-fantendo/images/5/5a/Nintendo_Switch_logo.png/revision/latest?cb=20161023110124&path-prefix=es"/>
									</div>

									<div className="row">

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="http://www.mobygames.com/images/covers/l/433847-the-legend-of-zelda-breath-of-the-wild-nintendo-switch-front-cover.jpg"/>
												</div>
												<div className="card-content">
													<p>The Legend of Zelda - Breath of the Wild</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="https://www.btgames.co.za/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/P/R/PR26253BI15617_N017112902011240_NS_SUPER_MARIO_ODYSSEY_SZ1.jpg"/>
												</div>
												<div className="card-content">
													<p>Super Mario Odyssey</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="http://orig08.deviantart.net/7e5c/f/2017/076/1/8/sonic_mania_artwork_hd_1_by_sonicx2011-db2oln0.jpg"/>
												</div>
												<div className="card-content">
													<p>Sonic Mania</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="http://www.nintendoforcemagazine.com/wp-content/uploads/2017/02/ARMS-Poster.png"/>
												</div>
												<div className="card-content">
													<p>Arms</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

									</div>
								</div>

								<div align="center" className="card card-style">

									<div className="row">
										<img height="40px"
												 src="https://cdn.worldvectorlogo.com/logos/xbox-one-3.svg"/>
									</div>

									<div className="row">

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="https://upload.wikimedia.org/wikipedia/en/d/d5/For_Honor_cover_art.jpg"/>
												</div>
												<div className="card-content">
													<p>For Honor</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="http://www.mobygames.com/images/covers/l/361715-far-cry-primal-xbox-one-front-cover.png"/>
												</div>
												<div className="card-content">
													<p>Far Cry Primal</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/game/media/browser/middle_earth_shadow_of_war_keyart.jpg?itok=M0NHEKU5"/>
												</div>
												<div className="card-content">
													<p>Middle Earth - Shadow of War</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

										<div className="col s12 m4 l3">
											<div className="card small">
												<div className="card-image">
													<img src="http://www.mobygames.com/images/covers/l/368100-titanfall-2-xbox-one-front-cover.png"/>
												</div>
												<div className="card-content">
													<p>Titanfall</p>
												</div>
												<div className="card-action price">
													<a href="#">$ 35.000</a>
												</div>
											</div>
										</div>

									</div>
								</div>

							</div>
						</div>
					</main>
					*/}

					{/* --- FOOTER --- */}
					<Footer />

				</main>
			</div>
		);
	}
	buildPlatforms(){
		const platformComponents = this.state.platforms.map((platform) => {
			const { id, title, imgPlatform, cards } = platform;
			return (
				
				<PlatformSection
					key={id}
					id={id}
					title={title}
					cards= {cards}
					imgPlatform = {imgPlatform}
				/>
			);
		});
	
	
		return platformComponents;
	}
	obtainCards(id){
		
		const cards = this.state.cards.map((platform) => {
			const { id, title, } = platform;
			
		});
	
	
		return cards;
	}
}

export default App;
