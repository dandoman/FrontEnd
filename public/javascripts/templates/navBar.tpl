<!-- <nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="navbar-header">
  		<a class="navbar-brand" href="#">TTECCA</a>
	</div>
	<div>
		<ul class="nav navbar-nav">
			<li><a href="#">Top</a></li>
   			<li><a href="#aboutAnchor">About</a></li>
   			<li><a href="#howAnchor">How</a></li> 
			</ul>
			<ul class="nav navbar-nav navbar-right">
	        <li><a href="#" id="registration"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
	        <li><a href="#" data-toggle="modal" data-target="#login-modal"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      	</ul>
	</div>
</nav> -->

<h1><a href="/">TTC PROJECT</a></h1>
<nav id="nav">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="contact.html">Contact</a></li>
		<li><a href="#" class="button" id="login_button">Login</a></li>
		<li><a href="registration" class="button">Sign Up</a></li>
	</ul>
</nav>

<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
	<div class="modal-dialog">
		<div class="loginmodal-container">
			<h1>Login to Your Account</h1><br>
		  	<form>
				<input type="text" id="userEmail" name="user" placeholder="Email">
				<input type="password" id="userPassword" name="pass" placeholder="Password">
				<input type="submit" id="submitLogin" name="login" class="login loginmodal-submit" value="Login">
		  	</form>
			
			<div class="login-help">
				<a href="#">Register</a> - <a href="#">Forgot Password</a>
			</div>
		</div>
	</div>
</div>