

		//selector
		const animationInR = "animate__animated animate__fadeInRight animate__faster"
		const animationOutR = " animate__animated animate__fadeOutRight animate__faster"
		const animationInL = " animate__animated animate__fadeInLeft animate__faster"
		const animationOutL = " animate__animated animate__fadeOutLeft animate__faster"
		const animationInU = " animate__animated animate__fadeInUp animate__faster"
		const animationOutU = " animate__animated animate__fadeOutUp animate__faster"
		const allAnimation = animationOutL + animationInL + animationInR + animationOutR
		const label_weigh = { "#allSelector": 1, "#aboutSelector": 2, "#furSelector": 3, "#mediaSelector": 4 }

		var theme = 'light';
		var current_selector = "#allSelector"
		//如果目标比当前大，在右边：目前右移出，目标左移进
		//如果目标比当前小，在左边：目前左移出，目标右移进 
		$(function () {
			// 1.header Label
			$("#allLabel").click(function () { //AllLabel
				$(".window").removeClass("blur")//remove all blur

				if (label_weigh[current_selector] < label_weigh["#allSelector"]) { //current in Left
					//impossible
				}
				else { //current in Right
					$(current_selector).removeClass(animationInL + animationInR).addClass(animationOutL) //←口
					$("#allSelector").removeClass('invisible ' + allAnimation).addClass(animationInR) //口←
				}

				current_selector = "#allSelector"
			})

			$("#aboutLabel").click(function () {
				//blur
				$(".window").removeClass("blur")
				$(".window:not(#intro,#nightmode)").addClass("blur")


				if (label_weigh[current_selector] < label_weigh["#aboutSelector"]) { //current in Left
					$(current_selector).removeClass(animationInR + animationInL).addClass(animationOutR) //口→
					$("#aboutSelector").removeClass('invisible ' + allAnimation).addClass(animationInL) //→口
				}
				else { //current in Right
					$(current_selector).removeClass(animationInR + animationInL).addClass(animationOutL) //←口
					$("#aboutSelector").removeClass('invisible ' + allAnimation).addClass(animationInR) //口←
				}

				current_selector = "#aboutSelector"
			})

			$("#furLabel").click(function () {
				//blur
				$(".window").removeClass("blur")
				$(".window:not(.bg-fofu1,.bg-fofu2)").addClass("blur")


				if (label_weigh[current_selector] < label_weigh["#furSelector"]) { //current in Left
					$(current_selector).removeClass(animationInR + animationInL).addClass(animationOutR) //口→
					$("#furSelector").removeClass('invisible ' + allAnimation).addClass(animationInL) //→口
				}
				else {//current in Right
					$(current_selector).removeClass(animationInR + animationInL).addClass(animationOutL) //←口
					$("#furSelector").removeClass('invisible ' + allAnimation).addClass(animationInR) //口←
				}

				current_selector = "#furSelector"
			})

			$("#mediaLabel").click(function () {
				//blur
				$(".window").removeClass("blur")
				$(".window:not(#posts,.bg-steam,#twitter,#spotify)").addClass("blur")


				if (label_weigh[current_selector] < label_weigh["#mediaSelector"]) { //current in Left
					$(current_selector).removeClass(animationInR + animationInL).addClass(animationOutR) //口→
					$("#mediaSelector").removeClass('invisible ' + allAnimation).addClass(animationInL) //→口
				}
				else {//current in right
					//impossible
				}

				current_selector = "#mediaSelector"
			})


			// 2.Night Mode toggle & animation
			$('.NightModeWindow').click(function () {
				if (theme == 'light') {
					$("html").addClass('dark')
					$("#moonToggle").removeClass(animationInR).addClass(animationOutR)
					$("#sunToggle").removeClass('invisible ' + animationOutL).addClass(animationInL)
					theme = 'dark';
				} else {
					$("html").removeClass('dark')
					$("#moonToggle").removeClass(animationOutR).addClass(animationInR)
					$("#sunToggle").removeClass(animationInL).addClass(animationOutL)
					theme = 'light';
				}
			})
			function link_btn(windowObj, LinkBtn, LinkURL, AnimationType = "L") {
				
				$(windowObj).hover(function () { // cursor on window
					$(LinkBtn).removeClass("invisible " + eval("animationOut"+AnimationType)).addClass(eval("animationIn"+AnimationType)); //btn in anim
					$(LinkBtn).hover(function () { // cursor on btn
						$(LinkBtn).removeClass(eval("animationIn"+AnimationType)).addClass("animate__animated animate__pulse animate__faster animate__infinite");//btn pulse
					}, function () {
						$(LinkBtn).removeClass("animate__animated animate__pulse animate__faster animate__infinite");//stop pulse when cursor out
					})

					$(LinkBtn).click(function () {
						window.open(LinkURL, '_blank');
					})

				}, function () {
					$(LinkBtn).removeClass(eval("animationIn"+AnimationType)).addClass(eval("animationOut"+AnimationType));//btn out anim
				});
			}

			// 3.twitter Link Btn animation
			link_btn(".bg-twitter", "#twitterLink", "https://twitter.com/Dispnt")
			link_btn(".bg-steam", "#steamLink", "http://steam.dispnt.com/")
			

			$(".bg-fofu1").click(function () {
				window.open("https://www.dispnt.com/index.php/archives/50/", '_blank');
			})


			$(".bg-fofu2").click(function () {
				window.open("https://fofu.dispnt.com/oc/?fofu2", '_blank');
			})

			// 4.posts fetch
			const monthes = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
			let htmlcontent = ''
			$.get("https://www.dispnt.com/index.php/feed/", function (data) {
				$(data).find("item").each(function () {
					var el = $(this);
					let month = monthes.indexOf(el.find("pubDate").text().substr(8, 3)) + 1
					if (month < 10) {
						month = '0' + month
					}
					let year = el.find("pubDate").text().substr(14, 2)

					htmlcontent = htmlcontent + `
				<div class="post">
					<div>
						<a href="`+ el.find("link").text() + `" class="truncate inline-block max-w-90px lg:max-w-180px">` + el.find("title").text() + `
						<a class="float-right align-bottom text-gray-400 text-sm mt-0.5 lg:mt-1">`+ month + "." + year + `</a>
						</a>
						
					</div>
				</div>
			`
				});
				$(".post-content").html(htmlcontent);

				// screen size
				if ($(document).width() > 1006) { 

					let all_posts = $('.post-content').children()
					let post_number = $('.post-content').children().length
					if (post_number > 12) { //show only 12 posts large screen
						for (let i = post_number - 1; i >= 12; i--) {
							$(".post:eq(" + i + ")").hide()
						}
					}
					$(".posts").removeClass("bg-qq"); //remove bg-qq for large screen
					
				}
				else {  //sml screen
					let all_posts = $('.post-content').children()
					let post_number = $('.post-content').children().length
					for (let i = post_number - 1; i >= 2; i--) {
						$(".post:eq(" + i + ")").hide()
					} //show only 2 post if sml screen
					link_btn(".bg-qq","#qqLink","https://qm.qq.com/cgi-bin/qm/qr?k=gwAN7xTFBfb7jUesY1nog6Jn3EiYIlAN&noverify=0","U")
					//qq div
				}
			});



			// 6.random emoji
			const emoji_dict = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😚', '😙', '😗', '😘', '😍', '😌', '😉', '🙃', '🙂', '😇', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠', '😖', '😣', '🙁', '😕', '😟', '😔', '😞', '😒', '😏', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😥', '😢', '😨', '😳', '😵', '😲', '😮', '😦', '🤤', '😭', '😪', '😴', '🙄', '🤔', '😬', '🤥', '🤐', '👺', '👹', '👿', '😈', '🤕', '🤒', '😷', '👻', '🎃', '😺', '😸', '😹', '🙏', '👏', '🙌', '👐', '😾', '😿', '🙀', '😽', '😼', '😻', '❤']
			$(".emoji").text(emoji_dict[Math.floor(Math.random() * (emoji_dict.length - 1 - 0 + 1))]);


		});
