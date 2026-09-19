
(function(){
  const C = window.PIXELALTY_CONFIG || {};
  document.querySelectorAll(".stripe-link").forEach(a => {
    a.href = C.stripePaymentLink || "#";
  });
  document.querySelectorAll(".instagram-link").forEach(a => {
    a.href = C.instagramUrl || "https://www.instagram.com/pixelalty/";
  });
  document.querySelectorAll(".price-text").forEach(el => {
    el.textContent = C.price || "$499";
  });
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

  const video = document.querySelector("#demo-video");
  const placeholder = document.querySelector("#demo-placeholder");
  if(video && placeholder){
    video.addEventListener("loadeddata", () => {
      placeholder.style.display = "none";
      video.style.display = "block";
    });
    video.addEventListener("error", () => {
      video.style.display = "none";
      placeholder.style.display = "block";
    });
    video.load();
  }

  const frame = document.querySelector("#intake-frame");
  const warn = document.querySelector("#intake-warning");
  if(frame){
    const raw = (C.intakeFormUrl || "").trim();
    const configured = raw && !raw.includes("REPLACE_WITH");
    if(configured){
      let url = raw;
      if(url.includes("tally.so/r/")){
        url = url.replace("tally.so/r/","tally.so/embed/");
      }
      if(!url.includes("?")){
        url += "?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
      }
      frame.src = url;
      frame.style.display = "block";
      if(warn) warn.style.display = "none";
    }else{
      frame.style.display = "none";
      if(warn) warn.style.display = "block";
    }
  }
})();
