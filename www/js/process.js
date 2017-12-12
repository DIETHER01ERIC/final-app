// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		let content = <div>
		<div align='center'>
						<h1> BALL GAMES </h1>
						<img src='img/th.jpg' width='100px' height='100px' />
					</div>
			<audio id="audio_bomb">
				<source src="audio/bomb.mp3" type="audio/mp3" />
			</audio>
			<div align='center'>
			

<p class="buttons-row">
  <a href="#" class="button button-fill color-red" onClick={process.page1}>BASEBALL</a>
  <a href="#" class="button button-fill color-green" onClick={process.page2}>BASKETBALL</a>
  
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-blue" onClick={process.page3}>BADMINTON</a>
  <a href="#" class="button button-fill color-pink" onClick={process.page4}>SOFTBALL</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-blue" onClick={process.page5}>VOLLEYBALL</a>
  <a href="#" class="button button-fill color-purple" onClick={process.page6}>SOCCER</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-cyan" onClick={process.page7}>RUGBY</a>
  <a href="#" class="button button-fill color-teal" onClick={process.page8}>BILLIARD</a>
</p>
<p class="buttons-row">
  <a href="#" class="button button-fill color-indigo" onClick={process.page9}>BOWLING</a>
  <a href="#" class="button button-fill color-yellow" onClick={process.page10}>ANGELBALL</a>
</p>       
<p class="buttons-row">
  <a href="#" class="button button-fill color-black" onClick={process.page11}>FOOTBALL</a>
  <a href="#" class="button button-fill color-yellowgreen" onClick={process.page12}>SEPAK TAKRAW</a>
</p>

			</div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		process.audio('audio_bomb').play();
		let content = <div>

		<p class="buttons-row">
  			<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
		</p>
				<div align='center'>
						<img src='img/baseball.jpg' width='300px' height='100px' />
						<p>
						<h1>BASEBALL</h1>
						<div>is a bat-and-ball game played between two teams of nine players each who take turns batting and fielding. The batting team attempts to score runs by hitting a ball (that is thrown by the opposing team's pitcher) with a bat swung by the batter, and then running counter-clockwise around a series of four bases: first, second, third, and home plate. A run is scored when a player advances around the bases and touches home plate.</div>
						<div>Players on the batting team take turns hitting against the pitcher of the fielding team, which tries to prevent runs by getting hitters out in any of several ways. A player on the batting team who reaches a base safely can later attempt to advance to subsequent bases during teammates' turns batting, such as on a hit or by other means. The teams switch between batting and fielding whenever the fielding team records three outs. One turn batting for both teams, beginning with the visiting team, constitutes an inning. A game is composed of nine innings, and the team with the greater number of runs at the end of the game wins. If scores are tied at the end of nine innings, extra innings are usually played. Baseball has no game clock, although most games end in the ninth inning.</div>
						</p>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page2:function(){
		process.audio('audio_bomb').play();
		let content = <div>
			<p class="buttons-row">
  				<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
			</p>
				<div align='center'>
						<img src='img/basketball.jpg' width='300px' height='100px' />
						<p>
						<h1>BASKETBALL</h1>
						<div>Basketball is a limited contact sport played on a rectangular court. While most often played as a team sport with five players on each side, three-on-three, two-on-two, and one-on-one competitions are also common. The objective is to shoot a ball through a hoop 18 inches (46 cm) in diameter and 10 feet (3.048 m) high that is mounted to a backboard at each end of the court. The game was invented in 1891 by Dr. James Naismith.</div>
						<div>at each end of the court. The game was invented in 1891 by Dr. James Naismith.</div>
						<div>A team can score a field goal by shooting the ball through the basket being defended by the opposition team during regular play. A field goal scores three points for the shooting team if the player shoots from behind the three-point line, and two points if shot from in front of the line. A team can also score via free throws, which are worth one point, after the other team is assessed with certain fouls. The team with the most points at the end of the game wins, but additional time (overtime) is mandated when the score is tied at the end of regulation. The ball can be advanced on the court by passing it to a teammate, or by bouncing it while walking or running (dribbling). It is a violation to lift, or drag, one's pivot foot without dribbling the ball, to carry it, or to hold the ball with both hands then resume dribbling.</div>
						<div>The game has many individual techniques for displaying skill—ball-handling, shooting, passing, dribbling, dunking, shot-blocking, and rebounding. Basketball teams generally have player positions, the tallest and strongest members of a team are called a center or power forward, while slightly shorter and more agile players are called small forward, and the shortest players or those who possess the best ball handling skills are called a point guard or shooting guard. The point guard directs the on court action of the team, implementing the coach's game plan, and managing the execution of offensive and defensive plays (player positioning).</div>
						<div>Basketball is one of the world's most popular and widely viewed sports.[1] The National Basketball Association (NBA) is the most popular and widely considered to be the highest level of professional basketball in the world and NBA players are the world's best paid athletes by average annual salary per player.[2][3] Outside North America, the top clubs from national leagues qualify to continental championships such as the Euroleague and FIBA Americas League. The FIBA Basketball World Cup is the major international competition of the sport and attracts the top national teams from around the world. Each continent hosts regional competitions for national teams, like EuroBasket and FIBA Americas Championship.</div>

						</p>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page3:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/badmenton.jpg' width='300px' height='100px' />
						<h1>BADMINTON</h1>
						<div> Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side's half of the court.</div>
						<div>Each side may only strike the shuttlecock once before it passes over the net. Play ends once the shuttlecock has struck the floor or if a fault has been called by the umpire, service judge, or (in their absence) the opposing side.</div>
						<div>The shuttlecock is a feathered or (in informal matches) plastic projectile which flies differently from the balls used in many other sports. In particular, the feathers create much higher drag, causing the shuttlecock to decelerate more rapidly. Shuttlecocks also have a high top speed compared to the balls in other racquet sports. The flight of the shuttlecock gives the sport its distinctive nature.</div>

					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},
	page4:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/softball.jpg' width='300px' height='100px' />
						<h1>SOFTBALL</h1>
						<div>is a variant of baseball played with a larger ball on a smaller field. It was invented in 1887 in Chicago, Illinois, United States as an indoor game. It was at various times called indoor baseball, mush ball, playground, softball, kitten ball, and because it was also played by women, ladies' baseball. The name softball was given to the game in 1926, because the ball used to be soft.</div>
						<div>A tournament held in 1933 at the Chicago World's Fair spurred interest in the game. The Amateur Softball Association (ASA) of America (founded 1933) governs the game in the United States and sponsors annual sectional and World Series championships. The World Baseball Softball Confederation (WBSC) regulates rules of play in more than 110 countries, including the United States and Canada; before the WBSC was formed in 2013, the International Softball Federation filled this role. Women's fast pitch softball became a Summer Olympic sport in 1996, but it and baseball were dropped from the 2012 Games; they will be reinstated for the 2020 Games.</div>
						<div>There are three types of softball. In the most common type, slow-pitch softball, the ball, which can measure either 11 or 12 inches in circumference depending on gender and league, must arch on its path to the batter, and there are 10 players on the field at once. In fastpitch softball, the pitch is fast, there are nine players on the field at one time, and bunting and stealing are permitted. Modified softball restricts the windmill windup of the pitcher, although the pitcher is allowed to throw as hard as possible with the restricted back swing. Softball rules vary somewhat from those of baseball. Two major differences are that the ball must be pitched underhand—from 46 ft (14 m) for men or 43 ft (13.1 m)[1] for women as compared with 60.5 ft (18.4 m) in baseball—and that seven innings instead of nine constitute a regulation game.</div>

					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	
	},

	page5:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/volleyball.jpg' width='300px' height='100px' />
						<h1>VOLLEYBALL</h1>
						<div>Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since 1964.</div>
						<div>The complete rules are extensive, but simply, play proceeds as follows: a player on one of the teams begins a 'rally' by serving the ball (tossing or releasing it and then hitting it with a hand or arm), from behind the back boundary line of the court, over the net, and into the receiving team's court. The receiving team must not let the ball be grounded within their court. The team may touch the ball up to 3 times but individual players may not touch the ball twice consecutively. Typically, the first two touches are used to set up for an attack, an attempt to direct the ball back over the net in such a way that the serving team is unable to prevent it from being grounded in their court.</div>
						<div>The rally continues, with each team allowed as many as three consecutive touches, until either (1): a team makes a kill, grounding the ball on the opponent's court and winning the rally; or (2): a team commits a fault and loses the rally. The team that wins the rally is awarded a point, and serves the ball to start the next rally. A few of the most common faults include:</div>
						<div>causing the ball to touch the ground or floor outside the opponents' court or without first passing over the net;
catching and throwing the ball;
double hit: two consecutive contacts with the ball made by the same player;
four consecutive contacts with the ball made by the same team;
net foul: touching the net during play;
foot fault: the foot crosses over the boundary line when serving.
The ball is usually played with the hands or arms, but players can legally strike or push (short contact) the ball with any part of the body.

A number of consistent techniques have evolved in volleyball, including spiking and blocking (because these plays are made above the top of the net, the vertical jump is an athletic skill emphasized in the sport) as well as passing, setting, and specialized player positions and offensive and defensive structures.</div>

					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page6:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/soccer.jpg' width='300px' height='100px' />
						<h1>SOCCER</h1>
						<div>Association football, more commonly known as football or soccer,[a] is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport.[3][4][5][6] The game is played on a rectangular field with a goal at each end. The object of the game is to score by getting the ball into the opposing goal.</div>
						<div>Players are not allowed to touch the ball with their hands or arms while it is in play, unless they are goalkeepers (and then only when within their penalty area). Other players mainly use their feet to strike or pass the ball, but may also use any part of their body except the hands and the arms. The team that scores the most goals by the end of the match wins. If the score is level at the end of the game, either a draw is declared or the game goes into extra time or a penalty shootout depending on the format of the competition. The Laws of the Game were originally codified in England by The Football Association in 1863. Association football is governed internationally by the International Federation of Association Football (FIFA; French: Fédération Internationale de Football Association), which organises World Cups for both men and women every four years.</div>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page7:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/rugby.jpg' width='300px' height='100px' />
						<h1>RUGBY</h1>
						<div>usually refers to rugby union or sometimes rugby league, which are both team sports, rugby union originating at Rugby School in Rugby, Warwickshire, and rugby league originating in Huddersfield, West Yorkshire after splitting and forming the Northern Union in 1896 (what is now known as rugby league). Rugby football (both league and union) is one of many versions of football played at English public schools in the 19th century.[1]. Although rugby league initially used rugby union rules, they are now wholly separate sports. In addition to the two existing codes, both codes of Gridiron football (American football and Canadian football) have evolved from rugby football, but themselves also completely different sports altogether.</div>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page8:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/billiard.jpg' width='300px' height='100px' />
						<h1>BILLIARD</h1>
						<div>English billiards,called simply billiards in Great Britain, where it originated, and in many former British colonies such as Australia, is a cue sport for two players or teams. Two cue balls (originally both white, with one marked e.g. with a black dot, but more recently one white, one yellow) and a red object ball are used. Each player or team uses a different cue ball. It is played on a billiards table with the same dimensions as a snooker table and points are scored for cannons and pocketing the balls. English billiards has also, but less frequently, been referred to as "the English game", "the all-in game" and (formerly) "the common game".</div>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page9:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/bowling.jpg' width='300px' height='100px' />
						<h1>BOWLING</h1>
						<div>is a sport or leisure activity in which a player rolls or throws a bowling ball towards a target. It is one of the major forms of throwing sports. In pin bowling variations, the target is usually to knock over pins at the end of a lane. When all the pins are knocked down on the first roll, this is a strike. If you get 12 strikes in a row you can score a 300. This is the maximum score for the sport. In target variations, the aim is usually to get the ball as close to a mark as possible. The pin version of bowling is often played on a flat wooden or other synthetic surface (which can be oiled in different patterns for different techniques),[1] while in target bowling, the surface may be grass, gravel or a synthetic surface.[2] The most common types of pin bowling include ten-pin, nine-pin, candlepin, duckpin and five-pin bowling, while in target bowling, bowls, skittles, kegel, bocce, carpet bowls, pétanque, and boules, both indoor and outdoor varieties are popular. Today the sport of bowling is played by 100 million people in more than 90 countries worldwide (including 70 million in the United States),[3] and continues to grow through entertainment media such as video games for home consoles and handheld devices.</div>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page10:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/angelball.jpg' width='300px' height='100px' />
						<h1>ANGELBALL</h1>
						<div>is the premier brand for North America's oldest sport, anejodi,[1] which was revived during World War 2 at Brown University by collegiate Hall of Fame football and basketball coach Charles "Rip" Engle (March 26, 1906 – March 7, 1983), to keep service men and women, students and athletes fit.[2] Angleball equipment is played for conditioning in the NFL, and by active groups worldwide - even inspiring a game-type in the world's best selling video game, Call of Duty, called Uplink. Angleball equipment is manufactured in the USA by Angleball USA & Worldwide which also organizes Angleball competition events.[3] International Angleball is in infancy and can be contacted through Angleball Worldwide for membership inquires and general questions - 8 countries are currently members.[4] Angleball is played by 500,000+ people in the United States as estimated by the group sizes of verifiable Angleball set users. The name "angleball" was chosen because it shares the first two letters as anejodi, honors the memory of Rip Engle, and the ball can be played all angles to the target.</div>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page11:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/football.png' width='300px' height='100px' />
						<h1>FOOTBALL</h1>
						<div>is a family of team sports that involve, to varying degrees, kicking a ball with the foot to score a goal. Unqualified, the word football is understood to refer to whichever form of football is the most popular in the regional context in which the word appears. Sports commonly called 'football' in certain places include: association football (known as soccer in some countries); gridiron football (specifically American football or Canadian football); Australian rules football; rugby football (either rugby league or rugby union); and Gaelic football.[1][2] These different variations of football are known as football codes.</div>
						<div>Various forms of football can be identified in history, often as popular peasant games. Contemporary codes of football can be traced back to the codification of these games at English public schools during the nineteenth century.[3][4] The expanse of the British Empire allowed these rules of football to spread to areas of British influence outside the directly controlled Empire.[5] By the end of the nineteenth century, distinct regional codes were already developing: Gaelic football, for example, deliberately incorporated the rules of local traditional football games in order to maintain their heritage.[6] In 1888, The Football League was founded in England, becoming the first of many professional football competitions. During the twentieth century, several of the various kinds of football grew to become some of the most popular team sports in the world.</div>

					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	page12:function(){
		process.audio('audio_bomb').play();
		let content = <div>
				<p class="buttons-row">
  					<a href="#" class="button button-big color-red " onClick={process.menu}>Back</a>
				</p>
				<div align='center'>
						<img src='img/sepak.jpg' width='300px' height='100px' />
						<h1>SEPAK TAKRAW</h1>
						<div>Indonesia: Sepak Takraw/Takrau, Bola Takraw/takrau; Myanmar: ပိုက်ကျော်ခြင်း;Malay: sepak raga; Thai: ตะกร้อ, rtgs: takro, pronounced [tā.krɔ̂ː]; Khmer: សីដក់ Sei Dak; Lao: ກະຕໍ້ ka-taw; Filipino: sipà, sipà tákraw, sepák tákraw [sɛ̝päk täkɾɐw]; Vietnamese: cầu mây ("calameae ball" or "rattan ball")),[1] or kick volleyball, is a sport native to Southeast Asia.[2] Sepak takraw differs from the similar sport of Footvolley in its use of a rattan ball and only allowing players to use their feet, knee, chest and head to touch the ball. It is a popular sport in Malaysia, Indonesia & Thailand.</div>
						<div>In Malaysia, the game is called sepak raga or takraw. In Laos, it is kataw (Lao: "twine" and "kick").[1] In Thailand, it is called takraw. In Myanmar it is known as chin lone, and is considered more of an art as there is often no opposing team, and the point is to keep the ball aloft gracefully and interestingly. In the Philippines, besides "takraw" it is also known as sipa, meaning "kick".</div>
						<div></div>
					</div>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio_bomb').pause();
	},

	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/bomb.mp3" type="audio/mp3" />
					</audio>
					<div align='center'>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
						<div className="progressbar-infinite color-multi"></div>
					</div>

				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById(audio);
		return _audio;
	},
	replayAudio:function(audio){
		process.audio(audio).addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio(audio).play();
		})
	}
}

let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
},5000);