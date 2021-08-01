import React from 'react'

export default function Footer() {
	return (
		<footer className="bg-dark">
				<div class="container text-light">
					<div class="row">
						<div class="col-md-12">
							<h4 className="h4 text-center"><br/><u>CURRENT WEATHER</u></h4>
						</div><hr/><br/>
						<div class="col-md-3">
							<h5 className="h5">WEATHER</h5>	
							<ul class="list-group list-group-flush">
							<li class="list-group-item bg-dark text-light">Forecast For The Week</li>
							<li class="list-group-item bg-dark text-light">Air Quality</li>
							<li class="list-group-item bg-dark text-light">Air Pollution</li>
							<li class="list-group-item bg-dark text-light">Weather Faqs</li>
							<li class="list-group-item bg-dark text-light">Sitemap</li>
							</ul>
						</div>

						<div class="col-md-3">
							<h5 className="h5">WEATHER NEWS</h5>	
							<ul class="list-group list-group-flush">
							<li class="list-group-item bg-dark text-light">Weather News </li>
							<li class="list-group-item bg-dark text-light">Agriculture </li>
							<li class="list-group-item bg-dark text-light">Health and Food</li>
							<li class="list-group-item bg-dark text-light">Climate Change</li>
							<li class="list-group-item bg-dark text-light">Global News</li>
							</ul>
						</div>

						<div class="col-md-3">
							<h5 className="h5">About</h5>	
							<ul class="list-group list-group-flush">
							<li class="list-group-item bg-dark text-light">Contact Us</li>
							<li class="list-group-item bg-dark text-light">About Us</li>
							<li class="list-group-item bg-dark text-light">Press</li>
							<li class="list-group-item bg-dark text-light">Terms Of Use</li>
							<li class="list-group-item bg-dark text-light">Feedback</li>
							</ul>
						</div>

						<div class="col-md-3">
							<h5 className="h5">Social</h5>	
							<ul class="list-group list-group-flush">
							<li class="list-group-item bg-dark text-light">Facebook</li>
							<li class="list-group-item bg-dark text-light">Twitter</li>
							<li class="list-group-item bg-dark text-light">Instagram</li>
							<li class="list-group-item bg-dark text-light">YouTube</li>
							</ul>
						</div><br/>
						<hr/>
						<p className="text-center">@My Weather Services Pvt. Ltd. 2021 | made by <a href="https://www.instagram.com/aniket__click/">Nomesh Tighare</a></p>						



					</div>
					<hr style={{backgroundColor:"white"}} />
				</div>
		</footer>				
	)
}