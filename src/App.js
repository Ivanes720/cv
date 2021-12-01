import React from 'react';
import './App.css';
import './Styles.css';
import logo from "./img/logo.svg"
import html from "./img/html.svg"
import git from "./img/git.png"
import css3 from "./img/CSS3.svg"
import reactjs from "./img/react.png"
import api from "./img/api.png"
//dsfd
function App() {
  return (
    <div className="App">
  	<header id="header" className="header">
		<div className="container">
			<div className="nav">
				<img src={logo} logo alt="#" className="logo"/>
				<ul className="menu">
					<li>
						<a href="https://github.com/Ivanes720">
							GitHub
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/ivan-narochnyi/">
							linkedin
						</a>
					</li>
				
					<li>
						<a href="#">
							Contacts
						</a>
					</li>
				</ul>
				<a href="tel:+18938392364" className="tel">
					12345678
				</a>
			</div>
			<div className="offer">
				<p>React Js Developer</p>
				<h1>
					Ivan Narochnyi
				</h1>
				<a href="#" className="btn">send email</a>
			</div>
		</div>
	</header>
	<section id="about" className="about">
		<div className="container">
					<div className="description">
				<div className="desc_left">
					<h3>About me</h3>
					<p>
					I am junior React developer from Ukraine, now living in Poland.
					</p>
				</div>
					
			</div>
			<div className="desc_right">
				<h3>Skills</h3>
				<p>
				</p>
			</div>
			<div className="gallery">
				<img src={html} alt="Event photo 1"/>
				<img src={css3} alt="Event photo 2"/>
				<img src={git} alt="Event photo 3"/>
				<img src={reactjs} alt="Event photo 4"/>
				<img src={api} alt="Event photo 5"/>
			</div>
		</div>
	</section>
	
    </div>
  );
}

export default App;
