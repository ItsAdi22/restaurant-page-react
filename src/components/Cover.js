import React from "react";
import styles from "./Cover.css";

function Cover(){
    return(
        <body className="d-flex h-100 text-center text-bg-dark">

<div className="cover-container-image d-flex w-100 h-100 p-3 mx-auto flex-column">
<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="mb-auto"> </header>
	  <main className="px-3">
		<h1>Cover your page.</h1>
		<p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
		<p className="lead">
		  <a href="#" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
		</p>
	  </main>
  <footer className="mt-auto text-white-50"></footer>
</div>
</div>
</body>
    )
}

export default Cover;