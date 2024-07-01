// *************************************************************************************************
// This is a JS version functions such as uploading, watermarks, events, form post
// *************************************************************************************************
let RoboCrop = function () {
  this.icons = {
    apply:
      '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 442.533 442.533" xml:space="preserve"><path fill="#fff" d="M434.539,98.499l-38.828-38.828c-5.324-5.328-11.799-7.993-19.41-7.993c-7.618,0-14.093,2.665-19.417,7.993L169.59,247.248   l-83.939-84.225c-5.33-5.33-11.801-7.992-19.412-7.992c-7.616,0-14.087,2.662-19.417,7.992L7.994,201.852   C2.664,207.181,0,213.654,0,221.269c0,7.609,2.664,14.088,7.994,19.416l103.351,103.349l38.831,38.828   c5.327,5.332,11.8,7.994,19.414,7.994c7.611,0,14.084-2.669,19.414-7.994l38.83-38.828L434.539,137.33   c5.325-5.33,7.994-11.802,7.994-19.417C442.537,110.302,439.864,103.829,434.539,98.499z"/></svg>',
    cancel:
      '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 511.63 511.631" xml:space="preserve"><path fill="#fff" d="M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85   c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871   c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428   c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143   c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839   c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118   c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136   c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283   c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756   C511.63,291.039,506.589,259.344,496.5,233.842z"/></svg>',
    flip_x:
      '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 444.819 444.819" xml:space="preserve"><path fill="#fff" d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264   c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168   c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413   c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864   c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/></svg>',
    flip_y:
      '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 444.819 444.819" xml:space="preserve"><path fill="#fff" d="M433.968,278.657L248.387,92.79c-7.419-7.044-16.08-10.566-25.977-10.566c-10.088,0-18.652,3.521-25.697,10.566   L10.848,278.657C3.615,285.887,0,294.549,0,304.637c0,10.28,3.619,18.843,10.848,25.693l21.411,21.413   c6.854,7.23,15.42,10.852,25.697,10.852c10.278,0,18.842-3.621,25.697-10.852L222.41,213.271L361.168,351.74   c6.848,7.228,15.413,10.852,25.7,10.852c10.082,0,18.747-3.624,25.975-10.852l21.409-21.412   c7.043-7.043,10.567-15.608,10.567-25.693C444.819,294.545,441.205,285.884,433.968,278.657z"/></svg>',
    crop: '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 444.819 444.819" xml:space="preserve"><path fill="#fff" d="M465.948,328.897h-63.953V85.936l70.517-70.233c1.711-1.903,2.566-4.089,2.566-6.565c0-2.478-0.855-4.665-2.566-6.567   C470.609,0.859,468.419,0,465.948,0c-2.478,0-4.668,0.855-6.57,2.57l-70.237,70.521H146.18V9.137c0-2.667-0.855-4.858-2.57-6.567   C141.897,0.859,139.71,0,137.042,0H82.227c-2.665,0-4.858,0.855-6.567,2.57c-1.711,1.713-2.57,3.903-2.57,6.567v63.954H9.136   c-2.666,0-4.856,0.854-6.567,2.568C0.859,77.372,0,79.562,0,82.226v54.818c0,2.666,0.855,4.856,2.568,6.565   c1.714,1.711,3.905,2.57,6.567,2.57h63.954V392.86c0,2.666,0.855,4.856,2.57,6.561c1.713,1.711,3.903,2.573,6.567,2.573h246.678   v63.953c0,2.663,0.855,4.854,2.566,6.564c1.708,1.711,3.898,2.566,6.57,2.566h54.816c2.666,0,4.856-0.855,6.563-2.566   c1.712-1.711,2.574-3.901,2.574-6.564v-63.953h63.953c2.662,0,4.853-0.862,6.56-2.573c1.712-1.704,2.567-3.895,2.567-6.561v-54.819   c0-2.669-0.855-4.863-2.567-6.57C470.801,329.76,468.61,328.897,465.948,328.897z M146.18,146.174h169.881L146.18,316.054V146.174z    M328.904,328.897H159.026l169.878-169.88V328.897z"/></svg>',
    invert:
      '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 444.819 444.819" xml:space="preserve"><path d="M317.769,368.589c-1.712-2.094-4.09-3.142-7.132-3.142H146.181V255.81h54.814c4.948,0,9.233-1.809,12.847-5.426    c3.616-3.616,5.424-7.898,5.424-12.85c0-4.565-1.431-8.47-4.283-11.704l-91.359-109.636c-3.617-4.184-8.28-6.279-13.99-6.279    c-5.712,0-10.373,2.092-13.988,6.279L4.285,225.83C1.425,229.064,0,232.969,0,237.534c0,4.952,1.811,9.234,5.424,12.85    c3.617,3.617,7.902,5.426,12.85,5.426h54.818v118.775v45.679v3.138v3.714c0,0.574,0.094,1.67,0.284,3.288    c0.191,1.619,0.479,2.714,0.859,3.282c0.378,0.575,0.903,1.335,1.569,2.286c0.662,0.951,1.521,1.622,2.565,1.998    c1.047,0.377,2.334,0.568,3.858,0.568h274.088c2.471,0,4.613-0.903,6.42-2.711c1.807-1.807,2.71-3.948,2.71-6.42    c0-1.909-0.663-3.9-1.995-6.002L317.769,368.589z" fill="#FFFFFF"/><path d="M542.748,297.788c-3.614-3.61-7.898-5.424-12.847-5.424h-54.816V173.593V127.91v-3.14v-3.711    c0-0.572-0.096-1.665-0.288-3.287c-0.191-1.619-0.479-2.712-0.855-3.284c-0.379-0.571-0.903-1.334-1.57-2.284    c-0.667-0.949-1.522-1.617-2.57-1.999c-1.047-0.378-2.327-0.571-3.854-0.571H191.86c-2.474,0-4.611,0.905-6.423,2.712    c-1.805,1.809-2.708,3.951-2.708,6.423c0,2.093,0.662,3.996,1.997,5.71l45.679,54.818c1.713,2.284,4.093,3.426,7.137,3.426    h164.453v109.634h-54.816c-4.948,0-9.232,1.81-12.847,5.42c-3.617,3.621-5.427,7.909-5.427,12.854    c0,4.568,1.43,8.466,4.287,11.707l91.361,109.632c3.806,4.381,8.467,6.567,13.99,6.567c5.514,0,10.174-2.187,13.983-6.567    l91.361-109.632c2.851-3.241,4.284-7.139,4.284-11.707C548.176,305.689,546.361,301.405,542.748,297.788z" fill="#FFFFFF"/></svg>',
  };
  this.image = {
    cropped: false,
    max_width: 2048,
    max_height: 1556,
    zoom: {
      speed: 10,
    },
    resolutions: {
      auto: {
        w: 0,
        h: 0,
      },
      max: {
        w: 0,
        h: 0,
      },
      small: {
        w: 0,
        h: 0,
      },
    },
  };
  this.hidePageScroll = false;
  this.imageElement = null;
  this.container = null; // Corrected assignment
  this.event_state = {};
  this.resize_canvas = document.createElement("canvas");
  this.orig_src = new Image();
  this.image_target = null;
  this.crop_canvas = null;
  this.cropBorder = null;
  this.autoSize = true;
  this.watermarks = {};
  this.cropValues = {
    enabled: false,
    width: {
      value: 200,
      resize: false,
      operator: "=",
      min: {
        value: 200,
        operator: ">=",
      },
      max: {
        value: false,
        operator: false,
      },
    },
    height: {
      value: 200,
      resize: false,
      operator: "=",
      min: {
        value: 200,
        operator: ">=",
      },
      max: {
        value: false,
        operator: false,
      },
    },
  };
  this.mouse = {};
  this.width = null;
  this.height = null;
  this.left = null;
  this.top = null;
  this.offset = null;
  this.touches = null;
  this.events = {
    upload: {
      before: false,
      end: false,
      progress: false,
    },
    apply: null,
  };

  // Check if #crop-editor element doesn't exist and create if necessary
  if (!document.querySelector("body #crop-editor")) {
    /* The above code is a multi-line comment in JavaScript. It is used to provide explanations or
    notes within the code that are not executed by the program. In this case, the comment
    mentions "cropEditor" which could be the name of a function or a section of code related to
    editing or manipulating images. */
    let cropEditor = document.createElement("div");
    cropEditor.id = "crop-editor";
    document.body.appendChild(cropEditor);

    // Append editor-busy-container to #crop-editor
    let editorBusyContainer = document.createElement("div");
    editorBusyContainer.className = "editor-busy-container";
    let editorBusy = document.createElement("div");
    editorBusy.className = "editor-busy";
    editorBusyContainer.appendChild(editorBusy);
    cropEditor.appendChild(editorBusyContainer);

    // Append editor-main-menu to #crop-editor
    let editorMainMenu = document.createElement("div");
    editorMainMenu.className = "editor-main-menu";
    cropEditor.appendChild(editorMainMenu);

    // Append cancel and apply buttons to .editor-main-menu
    let cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "cancel";
    cancelBtn.innerHTML = this.icons.cancel;
    editorMainMenu.appendChild(cancelBtn);

    let applyBtn = document.createElement("button");
    applyBtn.type = "button";
    applyBtn.className = "apply";
    applyBtn.innerHTML = this.icons.apply;
    editorMainMenu.appendChild(applyBtn);

    // Append image-actions to #crop-editor
    let imageActions = document.createElement("div");
    imageActions.className = "image-actions";
    cropEditor.appendChild(imageActions);

    // Append buttons (flip-x, flip-y, invert, crop) to .image-actions
    let flipXBtn = document.createElement("button");
    flipXBtn.type = "button";
    flipXBtn.className = "btn-main-menu-action flip-x";
    flipXBtn.innerHTML = this.icons.flip_x;
    imageActions.appendChild(flipXBtn);

    let flipYBtn = document.createElement("button");
    flipYBtn.type = "button";
    flipYBtn.className = "btn-main-menu-action flip-y";
    flipYBtn.innerHTML = this.icons.flip_y;
    imageActions.appendChild(flipYBtn);

    let invertBtn = document.createElement("button");
    invertBtn.type = "button";
    invertBtn.className = "btn-main-menu-action invert";
    invertBtn.innerHTML = this.icons.invert;
    imageActions.appendChild(invertBtn);

    let cropBtn = document.createElement("button");
    cropBtn.type = "button";
    cropBtn.className = "btn-main-menu-action crop";
    cropBtn.innerHTML = this.icons.crop;
    imageActions.appendChild(cropBtn);

    // Hide .btn-main-menu-action buttons
    document.querySelectorAll(".btn-main-menu-action").forEach(function (btn) {
      btn.style.display = "none";
    });

    // Append image-resolutions to #crop-editor
    let imageResolutions = document.createElement("div");
    imageResolutions.className = "image-resolutions";
    cropEditor.appendChild(imageResolutions);

    // Append buttons (img-max, img-auto, img-small) to .image-resolutions
    let imgMaxBtn = document.createElement("button");
    imgMaxBtn.type = "button";
    imgMaxBtn.className = "img-max";
    imgMaxBtn.innerHTML = "max";
    imageResolutions.appendChild(imgMaxBtn);

    let imgAutoBtn = document.createElement("button");
    imgAutoBtn.type = "button";
    imgAutoBtn.className = "img-auto";
    imgAutoBtn.innerHTML = "auto";
    imageResolutions.appendChild(imgAutoBtn);

    let imgSmallBtn = document.createElement("button");
    imgSmallBtn.type = "button";
    imgSmallBtn.className = "img-small";
    imgSmallBtn.innerHTML = "min";
    imageResolutions.appendChild(imgSmallBtn);
  }
};

RoboCrop.prototype.busy = function (e) {
  if (e === true) {
    if (!this.imageElement.querySelector(".loader")) {
      var loader = document.createElement("div");
      loader.className = "loader";
      this.imageElement.prepend(loader);
      this.imageElement.classList.add("busy");
    }
  } else {
    var loader = this.imageElement.querySelector(".loader");
    if (loader) {
      loader.remove();
    }
    this.imageElement.classList.remove("busy");
  }
};

RoboCrop.prototype.cropInit = function () {
  var e = this.imageElement.getAttribute("data-crop");
  if (e !== undefined && e !== null && ((e = e.split(",")), e.length === 2)) {
    const t = /\B(\=|\>|\<|\>\=|\<\=)(\d+)/g,
      i = /\b(\=|\>|\<|\>\=|\<\=)(\d+)/g;
    var o = t.exec(e[0]),
      r = i.exec(e[0]);
    t.lastIndex = 0;
    i.lastIndex = 0;
    var a = t.exec(e[1]),
      s = i.exec(e[1]);

    if (o !== null) {
      this.cropValues.width.min.value = this.cropValues.width.value = parseInt(
        o[2]
      );
      this.cropValues.width.min.operator = o[1];
      this.cropValues.width.resize = o[1] === "=" ? false : true;
    }

    if (r !== null) {
      this.cropValues.width.max.value = parseInt(r[2]);
      this.cropValues.width.max.operator = r[1];
    } else {
      this.cropValues.width.max.value = false;
      this.cropValues.width.max.operator = false;
    }

    if (a !== null) {
      this.cropValues.height.min.value = this.cropValues.height.value =
        parseInt(a[2]);
      this.cropValues.height.min.operator = a[1];
      this.cropValues.height.resize = a[1] === "=" ? false : true;
    }

    if (s !== null) {
      this.cropValues.height.max.value = parseInt(s[2]);
      this.cropValues.height.max.operator = s[1];
    } else {
      this.cropValues.height.max.value = false;
      this.cropValues.height.max.operator = false;
    }
  }
};

RoboCrop.prototype.toggleCrop = function (e) {
  this.cropValues.enabled =
    e === undefined ? !this.cropValues.enabled : e === true ? e : false;

  if (this.cropValues.enabled) {
    this.setCropArea(
      this.cropValues.width.value,
      this.cropValues.height.value,
      this.cropBorder,
      true
    );

    var t = this;
    this.crop_area = document.querySelector("#crop-editor .crop-area");

    if (this.crop_area) {
      this.crop_area.addEventListener("mousedown", function (event) {
        t.startMoving(event, t, true);
      });

      this.crop_area.addEventListener("touchstart", function (event) {
        t.startMoving(event, t, true);
      });
    }
  } else {
    var cropArea = document.querySelector("#crop-editor .crop-area");
    if (cropArea) {
      cropArea.remove();
    }
  }
};

RoboCrop.prototype.validExtension = function (e) {
  if (e.type !== undefined) {
    switch (e.type) {
      case "image/jpg":
        return true;
      case "image/jpeg":
        return true;
      case "image/png":
        return true;
      case "image/bmp":
        return true;
      case "image/gif":
        return true;
      default:
        return false;
    }
  } else {
    switch (e) {
      case "jpg":
        return "jpeg";
      case "jpeg":
        return e;
      case "png":
        return e;
      case "bmp":
        return e;
      case "gif":
        return e;
      default:
        return "png";
    }
  }
};

RoboCrop.prototype.init = function (e) {
  this.image.cropped = false;

  if (this.hidePageScroll) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    var cropEditor = document.getElementById("crop-editor");
    if (cropEditor) {
      cropEditor.style.overflow = "hidden";
    }
  }

  if (!document.querySelector("#crop-editor .resize-image")) {
    let cropEditor = document.getElementById("crop-editor");

    let resizeContainer = document.createElement("div");
    resizeContainer.className = "resize-container";
    cropEditor.appendChild(resizeContainer);

    ["flip_x", "flip_y", "invert", "crop"].forEach((tool) => {
      var button = document.createElement("button");
      button.type = "button";
      let tool_name = tool;
      button.innerHTML = this.icons[tool];
      if (tool == "flip_x") tool_name = "flip-x";
      if (tool == "flip_y") tool_name = "flip-y";
      button.className = `btn-crop-tool ${tool_name}`;
      resizeContainer.prepend(button);
    });

    let handleNW = document.createElement("span");
    handleNW.className = "resize-handle resize-handle-nw";
    resizeContainer.appendChild(handleNW);

    let handleNE = document.createElement("span");
    handleNE.className = "resize-handle resize-handle-ne";
    resizeContainer.appendChild(handleNE);

    let resizeImageCanvas = document.createElement("canvas");
    resizeImageCanvas.className = "resize-image";
    resizeContainer.appendChild(resizeImageCanvas);

    let handleSE = document.createElement("span");
    handleSE.className = "resize-handle resize-handle-se";
    resizeContainer.appendChild(handleSE);

    let handleSW = document.createElement("span");
    handleSW.className = "resize-handle resize-handle-sw";
    resizeContainer.appendChild(handleSW);

    this.container = resizeContainer;
  }

  var t = document.querySelector("#crop-editor .resize-image");

  if (this.autoSize) {
    var i = this.getProportionalDimensions(e.width, e.height);
    t.width = i.w;
    t.height = i.h;
  } else {
    t.width = e.width;
    t.height = e.height;
  }

  t.getContext("2d").drawImage(e, 0, 0, t.width, t.height);
  this.orig_src.src = t.toDataURL("image/png");

  this.image_target = document.querySelector("#crop-editor .resize-image");
  this.image_target.width = e.width;
  this.image_target.height = e.height;

  this.imageElement.setAttribute(
    "data-name",
    Math.random().toString(36).substring(7)
  );

  var o = this;

  this.container.addEventListener("mousedown", function (event) {
    if (event.target.classList.contains("resize-handle")) {
      o.startResize(event);
    } else if (event.target.tagName.toLowerCase() === "canvas") {
      o.startMoving(event, o);
    }
  });

  this.container.addEventListener("touchstart", function (event) {
    if (event.target.classList.contains("resize-handle")) {
      o.startResize(event);
    } else if (event.target.tagName.toLowerCase() === "canvas") {
      o.startMoving(event, o);
    }
  });

  document.querySelector("#crop-editor .resize-container").style.display =
    "none";

  setTimeout(
    function () {
      // Select the element and change its display style
      document.querySelector("#crop-editor .resize-container").style.display =
        "inline-block";

      // Call the resizeImage method with the auto resolution dimensions
      this.resizeImage(
        this.image.resolutions.auto.w,
        this.image.resolutions.auto.h
      );

      // Set another timeout to call the centerImage method after 20ms
      setTimeout(
        function () {
          this.centerImage();
        }.bind(this),
        20
      );

      // Call editorBusy, cropInit, and set an attribute on the image element
      this.editorBusy(false);
      this.cropInit();
      this.imageElement.setAttribute(
        "data-name",
        Math.random().toString(36).substring(7)
      );

      // Check if the data-crop-open attribute is "true" and call toggleCrop if it is
      var e = this.imageElement.getAttribute("data-crop-open");
      if (e === "true") {
        this.toggleCrop(true);
      }
    }.bind(this),
    1000
  );

  return true;
};

RoboCrop.prototype.loadImageFromUrl = function (e) {
  this.editorBusy(true);

  var cropEditor = document.getElementById("crop-editor");
  if (cropEditor && !cropEditor.querySelector(".current-status")) {
    var currentStatus = document.createElement("div");
    currentStatus.className = "current-status";
    cropEditor.appendChild(currentStatus);
  }

  var t = this;
  var i = new Image();

  i.onload = function () {
    return t.init(i);
  };

  i.addEventListener("error", function (e) {
    e.preventDefault();
    return "Error: crossorigin";
  });

  i.setAttribute("crossOrigin", "anonymous");

  var statusElement = document.querySelector("#crop-editor .current-status");
  if (statusElement) {
    statusElement.textContent = "Loading...";
  }

  i.src = e;
};

RoboCrop.prototype.editorBusy = function (e) {
  var cropEditor = document.getElementById("crop-editor");
  if (e === true) {
    if (!cropEditor.classList.contains("busy")) {
      cropEditor.classList.add("busy");
    }
  } else {
    cropEditor.classList.remove("busy");
  }
};

RoboCrop.prototype.loadImage = function (e) {
  this.editorBusy(true);

  var t = e;
  this.imageElement = e.closest(".crop-element");

  var cropEditor = document.getElementById("crop-editor");
  if (cropEditor && !cropEditor.querySelector(".current-status")) {
    var currentStatus = document.createElement("div");
    currentStatus.className = "current-status";
    cropEditor.appendChild(currentStatus);
  }

  var i = this;
  if (t.files && t.files[0]) {
    if (!this.validExtension(t.files[0])) {
      return "invalid file Extension";
    }

    var o = new FileReader();
    o.onload = function (e) {
      var o = new Image();
      o.onload = function () {
        return i.init(o);
      };
      o.src = e.target.result;
      t.value = "";
    };
    o.readAsDataURL(t.files[0]);
  }
};

RoboCrop.prototype.dropImage = function (e) {
  this.editorBusy(true);

  var t = this;
  this.imageElement = e.target.closest(".crop-element");

  var cropEditor = document.getElementById("crop-editor");
  if (cropEditor && !cropEditor.querySelector(".current-status")) {
    var currentStatus = document.createElement("div");
    currentStatus.className = "current-status";
    cropEditor.appendChild(currentStatus);
  }

  var i = e.target.files || e.dataTransfer.files;
  if (
    i.length > 0 &&
    typeof FileReader !== "undefined" &&
    t.validExtension(i[0]) === true
  ) {
    var o = new FileReader();
    o.onload = function (e) {
      var i = new Image();
      i.onload = function () {
        return t.init(i);
      };
      i.src = e.target.result;
    };
    o.readAsDataURL(i[0]);
  }
};

RoboCrop.prototype.getProportionalDimensions = function (w, h) {
  var dimensions = {};
  var cropEditor = document.querySelector("#crop-editor");

  // Max resolution
  if (w > this.image.max_width || h > this.image.max_height) {
    if (this.image.max_width < w) {
      dimensions["w"] = this.image.max_width;
      dimensions["h"] = (dimensions["w"] / w) * h;

      this.image.resolutions.max.w = this.image.max_width;
      this.image.resolutions.max.h = (dimensions["w"] / w) * h;
    } else {
      dimensions["h"] = this.image.max_height;
      dimensions["w"] = (dimensions["h"] / h) * w;

      this.image.resolutions.max.h = this.image.max_height;
      this.image.resolutions.max.w = (dimensions["h"] / h) * w;
    }
  } else {
    this.image.resolutions.max.w = w;
    this.image.resolutions.max.h = h;

    dimensions["w"] = w;
    dimensions["h"] = h;
  }

  // Auto resolution
  var factor = 0.8; // 80% of screen
  var cropEditorWidth = cropEditor.clientWidth;
  var cropEditorHeight = cropEditor.clientHeight;

  if (w > cropEditorWidth || h > cropEditorHeight) {
    if (w > cropEditorWidth) {
      this.image.resolutions.auto.w = Math.ceil(cropEditorWidth * factor);
      this.image.resolutions.auto.h = Math.ceil(
        ((cropEditorWidth * factor) / w) * h
      );
    }
    if (h > cropEditorHeight) {
      this.image.resolutions.auto.w = Math.ceil(
        ((cropEditorHeight * factor) / h) * w
      );
      this.image.resolutions.auto.h = Math.ceil(cropEditorHeight * factor);
    }
  } else {
    this.image.resolutions.auto.w = Math.ceil(w);
    this.image.resolutions.auto.h = Math.ceil(h);
  }

  // Small resolution
  this.image.resolutions.small.w = Math.ceil(this.image.resolutions.auto.w / 2);
  this.image.resolutions.small.h = Math.ceil(this.image.resolutions.auto.h / 2);

  return dimensions;
};

RoboCrop.prototype.saveEventState = function (e, t) {
  var containerOrCropArea = t ? "crop_area" : "container";

  this.event_state[t ? "crop_area_width" : "container_width"] =
    this[containerOrCropArea].offsetWidth;
  this.event_state[t ? "crop_area_height" : "container_height"] =
    this[containerOrCropArea].offsetHeight;
  this.event_state[t ? "crop_area_left" : "container_left"] =
    this[containerOrCropArea].getBoundingClientRect().left + window.scrollX;
  this.event_state[t ? "crop_area_top" : "container_top"] =
    this[containerOrCropArea].getBoundingClientRect().top + window.scrollY;

  this.event_state.mouse_x =
    (e.clientX || e.pageX || e.touches[0].clientX) + window.scrollX;
  this.event_state.mouse_y =
    (e.clientY || e.pageY || e.touches[0].clientY) + window.scrollY;

  var i = this;
  if (e.touches) {
    this.event_state.touches = [];
    Array.prototype.forEach.call(e.touches, function (touch, index) {
      i.event_state.touches[index] = {
        clientX: touch.clientX,
        clientY: touch.clientY,
      };
    });
  }

  this.event_state.evnt = e;
};

RoboCrop.prototype.startResize = function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.saveEventState(e);

  var t = this;

  function handleMouseMove(e) {
    t.resizing(e);
  }

  function handleMouseUp(e) {
    t.endResize(e);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("touchmove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchend", handleMouseUp);
  }

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("touchmove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
  document.addEventListener("touchend", handleMouseUp);
};

RoboCrop.prototype.endResize = function (e) {
  e.preventDefault();

  var t = this;

  function handleMouseUp(e) {
    t.endResize(e);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchend", handleMouseUp);
  }

  function handleMouseMove(e) {
    t.resizing(e);
  }

  document.removeEventListener("mouseup", handleMouseUp);
  document.removeEventListener("touchend", handleMouseUp);
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("touchmove", handleMouseMove);
};

RoboCrop.prototype.startMoving = function (e, t, i) {
  e.preventDefault();
  e.stopPropagation();
  var o = false;

  // Check for resize-crop class and determine direction
  if (e.target.classList.contains("resize-crop")) {
    if (e.target.classList.contains("left")) o = "left";
    if (e.target.classList.contains("right")) o = "right";
    if (e.target.classList.contains("top")) o = "top";
    if (e.target.classList.contains("bottom")) o = "bottom";
  }

  // Save the event state
  t.saveEventState(e, i ? true : false);

  // Add event listeners for mousemove/touchmove and mouseup/touchend
  function moveHandler(event) {
    t.moving(event, i, o);
  }

  function endHandler(event) {
    document.removeEventListener("mousemove", moveHandler);
    document.removeEventListener("touchmove", moveHandler);
    document.removeEventListener("mouseup", endHandler);
    document.removeEventListener("touchend", endHandler);
  }

  document.addEventListener("mousemove", moveHandler);
  document.addEventListener("touchmove", moveHandler);
  document.addEventListener("mouseup", endHandler);
  document.addEventListener("touchend", endHandler);
};

RoboCrop.prototype.endMoving = function (e) {
  e.preventDefault();

  var t = this;

  function handleMouseUp(e) {
    t.endMoving(e);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchend", handleMouseUp);
  }

  function handleMouseMove(e) {
    t.moving(e);
  }

  document.removeEventListener("mouseup", handleMouseUp);
  document.removeEventListener("touchend", handleMouseUp);
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("touchmove", handleMouseMove);
};

RoboCrop.prototype.cropResize = function (e) {
  var editor = document.getElementById("crop-editor");
  var cropArea = editor.querySelector(".crop-area");
  var resizeContainer = editor.querySelector(".resize-container");

  var t = cropArea.getBoundingClientRect().left;
  var i = resizeContainer.getBoundingClientRect().left;
  var o = cropArea.getBoundingClientRect().top;
  var r = resizeContainer.getBoundingClientRect().top;
  var a = cropArea.offsetWidth;
  var s = resizeContainer.offsetWidth;
  var n = cropArea.offsetHeight;
  var c = resizeContainer.offsetHeight;
  var h = 0;

  if ("left" === e) {
    var p = 10;
    h = t - this.mouse.x + a - p;
  } else if ("right" === e) {
    var p = 20;
    h = this.mouse.x - t - p;
  } else if ("top" === e) {
    var p = 10;
    h = o - this.mouse.y + n - p;
  } else if ("bottom" === e) {
    var p = 20;
    h = this.mouse.y - o - p;
  }

  if ("top" === e || "bottom" === e) {
    if (r >= o && h > this.cropValues.height.value) return;
    if (o + n + 10 >= r + c && h > this.cropValues.height.value) return;
  }

  if ("left" === e || "right" === e) {
    if (i >= t && h > this.cropValues.width.value) return;
    if (t + a + 10 >= i + s && h > this.cropValues.width.value) return;
  }

  if ("left" === e || "right" === e) {
    this.cropValues.width.value = this.validCropSize(h, this.cropValues.width);
  } else {
    this.cropValues.height.value = this.validCropSize(
      h,
      this.cropValues.height
    );
  }

  this.setCropArea(
    this.cropValues.width.value,
    this.cropValues.height.value,
    this.cropBorder,
    true
  );
};

RoboCrop.prototype.validCropSize = function (e, t) {
  switch (t.min.operator) {
    case ">=":
      e = e >= t.min.value ? e : t.min.value;
      break;
    case "<=":
      e = e <= t.min.value ? e : t.min.value;
      break;
    case "<":
      e = e < t.min.value ? e : t.min.value;
      break;
    case ">":
      e = e > t.min.value ? e : t.min.value;
      break;
    case "=":
      e = e == t.min.value ? e : t.min.value;
      break;
  }

  switch (t.max.operator) {
    case ">=":
      e = t.max.value === false || e >= t.max.value ? e : t.max.value;
      break;
    case "<=":
      e = t.max.value === false || e <= t.max.value ? e : t.max.value;
      break;
    case "<":
      e = t.max.value === false || e < t.max.value ? e : t.max.value;
      break;
    case ">":
      e = t.max.value === false || e > t.max.value ? e : t.max.value;
      break;
    case "=":
      e = t.max.value === false || e == t.max.value ? e : t.max.value;
      break;
  }

  return Math.ceil(e);
};

RoboCrop.prototype.cropConflict = function () {
  if (this.cropValues.enabled) {
    var cropArea = document.querySelector("#crop-editor .crop-area");
    var resizeContainer = document.querySelector(
      "#crop-editor .resize-container"
    );

    if (!resizeContainer || !cropArea) {
      return false;
    }

    var cropAreaOffset = cropArea.getBoundingClientRect();
    var resizeContainerOffset = resizeContainer.getBoundingClientRect();

    var cropAreaDimensions = {
      width: cropArea.offsetWidth,
      height: cropArea.offsetHeight,
    };

    var resizeContainerDimensions = {
      width: resizeContainer.offsetWidth,
      height: resizeContainer.offsetHeight,
    };

    var toleranceVertical = 12;
    var toleranceHorizontal = 8;

    // Check vertical conflict
    if (
      resizeContainerOffset.top +
        resizeContainerDimensions.height -
        toleranceVertical -
        (cropAreaOffset.top + cropAreaDimensions.height) <=
      0
    ) {
      return true;
    }

    // Check horizontal conflict
    if (
      resizeContainerOffset.left +
        resizeContainerDimensions.width -
        toleranceHorizontal -
        (cropAreaOffset.left + cropAreaDimensions.width) <=
      0
    ) {
      return true;
    }
  }

  return false;
};

RoboCrop.prototype.moving = function (e, t, i) {
  e.preventDefault();
  e.stopPropagation();

  this.touches = e.touches || (e.originalEvent && e.originalEvent.touches);
  this.mouse.x =
    (e.clientX || e.pageX || (this.touches && this.touches[0].clientX)) +
    window.scrollX;
  this.mouse.y =
    (e.clientY || e.pageY || (this.touches && this.touches[0].clientY)) +
    window.scrollY;

  if (t && i) {
    this.cropResize(i);
    return;
  }

  var o = t ? this.crop_area : this.container;
  var r = t ? this.event_state.crop_area_left : this.event_state.container_left;
  var a = t ? this.event_state.crop_area_top : this.event_state.container_top;
  var s = t
    ? this.event_state.crop_area_height
    : this.event_state.container_height;
  var n = t
    ? this.event_state.crop_area_width
    : this.event_state.container_width;

  var c = this.mouse.y - (this.event_state.mouse_y - a);
  var h = this.mouse.x - (this.event_state.mouse_x - r);

  var editor = document.getElementById("crop-editor");
  var cropArea = editor.querySelector(".crop-area");
  var resizeContainer = editor.querySelector(".resize-container");

  var p = cropArea.getBoundingClientRect();
  var l = resizeContainer.getBoundingClientRect();

  var d = {
    width: cropArea.offsetWidth,
    height: cropArea.offsetHeight,
  };

  var g = {
    width: resizeContainer.offsetWidth,
    height: resizeContainer.offsetHeight,
  };

  if (l.left <= 0 || l.top <= 0) {
    document.querySelectorAll(".btn-main-menu-action").forEach(function (btn) {
      btn.style.display = "block";
    });
    document.querySelectorAll(".btn-crop-tool").forEach(function (btn) {
      btn.style.display = "none";
    });
  } else {
    document.querySelectorAll(".btn-main-menu-action").forEach(function (btn) {
      btn.style.display = "none";
    });
    document.querySelectorAll(".btn-crop-tool").forEach(function (btn) {
      btn.style.display = "block";
    });
  }

  if (this.cropValues.enabled && t) {
    if (p.top - l.top <= 0 && a >= c) {
      c = l.top;
    }
    if (p.left - l.left <= 0 && r >= h) {
      h = l.left;
    }

    var m = 12;
    if (
      l.top + g.height - m - (p.top + d.height) <= 0 &&
      c + d.height > l.top + g.height - m
    ) {
      c = l.top - m + (g.height - d.height);
    }

    var u = 8;
    if (
      l.left + g.width - u - (p.left + d.width) <= 0 &&
      h + d.width > l.left + g.width - u
    ) {
      h = l.left - u + (g.width - d.width);
    }
  }

  setOffset(o, { left: h, top: c });

  if (
    this.event_state.touches &&
    this.event_state.touches.length > 1 &&
    this.touches.length > 1
  ) {
    var v = n;
    var f = s;

    var w =
      this.event_state.touches[0].clientX - this.event_state.touches[1].clientX;
    w *= w;
    var b =
      this.event_state.touches[0].clientY - this.event_state.touches[1].clientY;
    b *= b;
    var x = Math.sqrt(w + b);

    w = e.touches[0].clientX - this.touches[1].clientX;
    w *= w;
    b = e.touches[0].clientY - this.touches[1].clientY;
    b *= b;
    var z = Math.sqrt(w + b);

    var C = z / x;
    v *= C;
    f *= C;

    if (!t) {
      this.resizeImage(v, f);
      this.setChangesStateOn(true);
    }
  }
};

RoboCrop.prototype.resizing = function (e) {
  const self = this;
  const container = self.container;
  const eventState = self.event_state;

  function setOffset(el, options) {
    const curOffset = getOffset(el);
    const curCSSTop = parseFloat(window.getComputedStyle(el).top) || 0;
    const curCSSLeft = parseFloat(window.getComputedStyle(el).left) || 0;

    if (options.top != null) {
      el.style.top = `${options.top - curOffset.top + curCSSTop}px`;
    }
    if (options.left != null) {
      el.style.left = `${options.left - curOffset.left + curCSSLeft}px`;
    }
  }

  self.offset = getOffset(container);
  self.mouse = {
    x:
      (e.clientX || e.pageX || (e.touches && e.touches[0].clientX)) +
      window.scrollX,
    y:
      (e.clientY || e.pageY || (e.touches && e.touches[0].clientY)) +
      window.scrollY,
  };

  const target = eventState.evnt.target;

  if (hasClass(target, "resize-handle-se")) {
    self.width = self.mouse.x - eventState.container_left;
    self.height = self.mouse.y - eventState.container_top;
    self.left = eventState.container_left;
    self.top = eventState.container_top;
  } else if (hasClass(target, "resize-handle-sw")) {
    self.width =
      eventState.container_width - (self.mouse.x - eventState.container_left);
    self.height = self.mouse.y - eventState.container_top;
    self.left = self.mouse.x;
    self.top = eventState.container_top;
  } else if (hasClass(target, "resize-handle-nw")) {
    self.width =
      eventState.container_width - (self.mouse.x - eventState.container_left);
    self.height =
      eventState.container_height - (self.mouse.y - eventState.container_top);
    self.left = self.mouse.x;
    self.top = self.mouse.y;
    if (self.constrain || e.shiftKey) {
      self.top =
        self.mouse.y -
        ((self.width / self.orig_src.width) * self.orig_src.height -
          self.height);
    }
  } else if (hasClass(target, "resize-handle-ne")) {
    self.width = self.mouse.x - eventState.container_left;
    self.height =
      eventState.container_height - (self.mouse.y - eventState.container_top);
    self.left = eventState.container_left;
    self.top = self.mouse.y;
    if (self.constrain || e.shiftKey) {
      self.top =
        self.mouse.y -
        ((self.width / self.orig_src.width) * self.orig_src.height -
          self.height);
    }
  }

  if (self.constrain || e.shiftKey) {
    self.height = (self.width / self.orig_src.width) * self.orig_src.height;
  }

  if (self.width > 0 && self.height > 0) {
    const padding = 8;
    const cropAreaOffset = getOffset(
      document.querySelector("#crop-editor .crop-area")
    );
    const containerOffset = getOffset(
      document.querySelector("#crop-editor .resize-container")
    );
    const cropAreaSize = {
      width: document.querySelector("#crop-editor .crop-area").offsetWidth,
      height: document.querySelector("#crop-editor .crop-area").offsetHeight,
    };

    if (self.cropValues.enabled) {
      if (
        self.width + containerOffset.left - padding <=
        cropAreaOffset.left + cropAreaSize.width
      )
        return;
      if (
        self.height + containerOffset.top - padding <=
        cropAreaOffset.top + cropAreaSize.height
      )
        return;
    }

    self.resizeImage(self.width, self.height);
    setOffset(container, { left: self.left, top: self.top });
  }

  document.querySelector("#crop-editor .current-status").textContent = `${
    self.getImageSize().w
  }x${self.getImageSize().h}`;
};

RoboCrop.prototype.getImageSize = function () {
  var e = {};

  var resizeImage = document.querySelector("#crop-editor .resize-image");

  e.w = resizeImage.getAttribute("width") || "0";
  e.h = resizeImage.getAttribute("height") || "0";

  return e;
};

RoboCrop.prototype.resizeImage = function (width, height) {
  setTimeout(() => {
    width = Math.ceil(width);
    height = Math.ceil(height);

    this.resize_canvas.width = width;
    this.resize_canvas.height = height;
    this.resize_canvas
      .getContext("2d")
      .drawImage(this.orig_src, 0, 0, width, height);

    this.image_target.width = width;
    this.image_target.height = height;

    var resizeImage = document.querySelector("#crop-editor .resize-image");
    resizeImage.setAttribute("width", Math.ceil(width));
    resizeImage.setAttribute("height", Math.ceil(height));

    this.image_target.getContext("2d").drawImage(this.resize_canvas, 0, 0);

    document.querySelector("#crop-editor .current-status").textContent =
      this.getImageSize().w + "x" + this.getImageSize().h;

    // Disable crop if crop area is too big
    if (this.cropConflict()) {
      var cropArea = document.querySelector("#crop-editor .crop-area");
      cropArea.parentNode.removeChild(cropArea);
      this.cropValues.enabled = false;
    }
  }, 10);
};

RoboCrop.prototype.setCropArea = function (e, t, i, o) {
  var cropEditor = document.querySelector("#crop-editor");
  var resizeContainer = cropEditor.querySelector(".resize-container");

  if (e > resizeContainer.clientWidth || t > resizeContainer.clientHeight) {
    this.cropValues.enabled = false;
    cropEditor.querySelector(".current-status").textContent =
      "Picture is too small to be cropped.";
    return;
  }

  i = typeof i === "undefined" || i === null ? 4 : i;
  this.cropBorder = i;
  this.cropValues.width.value = e;
  this.cropValues.height.value = t;

  if (o === true) {
    var r = 0;
    e += r;
    t += r;

    if (!resizeContainer.querySelector(".crop-area")) {
      var cropAreaHTML =
        '<div class="crop-area"><span class="crop-size">200x200</span><span class="resize-crop top"></span><span class="resize-crop bottom"></span><span class="resize-crop left"></span><span class="resize-crop right"></span></div>';
      resizeContainer.insertAdjacentHTML("afterbegin", cropAreaHTML);
    }

    var cropArea = resizeContainer.querySelector(".crop-area");
    cropArea.classList.remove("resize-w", "resize-h");

    if (this.cropValues.width.resize) {
      cropArea.classList.add("resize-w");
    }
    if (this.cropValues.height.resize) {
      cropArea.classList.add("resize-h");
    }

    cropArea.style.width =
      this.cropValues.width.value + 2 * this.cropBorder + "px";
    cropArea.style.height =
      this.cropValues.height.value + 2 * this.cropBorder + "px";
    cropArea.style.marginLeft =
      (-1 * (this.cropValues.width.value + 2 * this.cropBorder)) / 2 + "px";
    cropArea.style.marginTop =
      (-1 * (this.cropValues.height.value + 2 * this.cropBorder)) / 2 + "px";

    cropEditor.querySelector(".crop-size").textContent =
      this.cropValues.width.value + "x" + this.cropValues.height.value;
  }
};

RoboCrop.prototype.centerImage = function () {
  var cropEditor = document.querySelector("#crop-editor");
  var resizeContainer = document.querySelector(
    "#crop-editor .resize-container"
  );

  if (!cropEditor || !resizeContainer) {
    return; // Exit if elements are not found
  }

  var cropEditorOffsetLeft = cropEditor.offsetLeft;
  var cropEditorWidth = cropEditor.offsetWidth;
  var resizeContainerWidth = resizeContainer.offsetWidth;

  var e =
    cropEditorOffsetLeft + (cropEditorWidth / 2 - resizeContainerWidth / 2);
  var t = cropEditor.offsetHeight / 2 - resizeContainer.offsetHeight / 2;

  // Apply styles using CSS transitions for animation
  this.container.style.transition = "left 0.1s, top 0.1s";
  this.container.style.left = e + "px";
  this.container.style.top = t + "px";
};

RoboCrop.prototype.flipX = function () {
  // Set the editor as busy
  this.editorBusy(true);

  // Asynchronously execute the flip operation
  setTimeout(
    function () {
      // Save the original width and height of the image
      var originalWidth = this.image_target.width;
      var originalHeight = this.image_target.height;

      // Resize the image to its maximum resolution
      this.resizeImage(
        this.image.resolutions.max.w,
        this.image.resolutions.max.h
      );

      // Get the canvas context and dimensions
      var context = this.image_target.getContext("2d");
      var canvasWidth = context.canvas.width;
      var canvasHeight = context.canvas.height;

      // Clear the canvas
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      // Save the current canvas state
      context.save();

      // Flip the image horizontally
      context.scale(-1, 1);

      // Draw the image with flipped coordinates
      context.drawImage(
        this.orig_src,
        -1 * canvasWidth,
        0,
        canvasWidth,
        canvasHeight
      );

      // Restore the canvas state
      context.restore();

      // Update the original source image with the flipped image data
      this.orig_src.src = this.image_target.toDataURL("image/png");

      // Resize the image back to its original dimensions
      this.resizeImage(originalWidth, originalHeight);

      // Set the editor as not busy
      this.editorBusy(false);

      // Center the image after flipping (delayed by 10 milliseconds)
      setTimeout(
        function () {
          this.centerImage();
        }.bind(this),
        10
      );
    }.bind(this),
    10
  ); // Execute after a delay of 10 milliseconds
};

RoboCrop.prototype.flipY = function () {
  // Set the editor as busy
  this.editorBusy(true);

  // Asynchronously execute the flip operation
  setTimeout(
    function () {
      // Save the original width and height of the image
      var originalWidth = this.image_target.width;
      var originalHeight = this.image_target.height;

      // Resize the image to its maximum resolution
      this.resizeImage(
        this.image.resolutions.max.w,
        this.image.resolutions.max.h
      );

      // Get the canvas context and dimensions
      var context = this.image_target.getContext("2d");
      var canvasWidth = context.canvas.width;
      var canvasHeight = context.canvas.height;

      // Clear the canvas
      context.clearRect(0, 0, canvasWidth, canvasHeight);

      // Save the current canvas state
      context.save();

      // Flip the image vertically
      context.scale(1, -1);

      // Draw the image with flipped coordinates
      context.drawImage(
        this.orig_src,
        0,
        -1 * canvasHeight,
        canvasWidth,
        canvasHeight
      );

      // Restore the canvas state
      context.restore();

      // Update the original source image with the flipped image data
      this.orig_src.src = this.image_target.toDataURL("image/png");

      // Resize the image back to its original dimensions
      this.resizeImage(originalWidth, originalHeight);

      // Set the editor as not busy
      this.editorBusy(false);

      // Center the image after flipping (delayed by 10 milliseconds)
      setTimeout(
        function () {
          this.centerImage();
        }.bind(this),
        10
      );
    }.bind(this),
    10
  ); // Execute after a delay of 10 milliseconds
};

RoboCrop.prototype.invertDimensions = function () {
  // Get the canvas context and dimensions
  var context = this.image_target.get(0).getContext("2d");
  var canvasWidth = context.canvas.width;
  var canvasHeight = context.canvas.height;

  // Resize the image to invert its dimensions
  this.resizeImage(canvasHeight, canvasWidth);

  // Center the image after resizing
  this.centerImage();
};

RoboCrop.prototype.crop = function () {
  this.image.cropped = true;

  // Find elements
  var cropEditor = document.querySelector("#crop-editor");
  var cropArea = cropEditor.querySelector(".crop-area");
  var resizeImage = cropEditor.querySelector(".resize-image");

  // Calculate offsets and dimensions
  var t =
    cropArea.getBoundingClientRect().left -
    this.container.getBoundingClientRect().left;
  var i =
    cropArea.getBoundingClientRect().top -
    this.container.getBoundingClientRect().top;
  var o = cropArea.clientWidth;
  var r = cropArea.clientHeight;

  // Create a canvas element for cropping
  var e = document.createElement("canvas");
  e.width = o;
  e.height = r;

  // Draw the cropped image onto the canvas
  e.getContext("2d").drawImage(
    this.image_target, // Assuming this.image_target is an HTMLImageElement
    t + this.cropBorder,
    i + this.cropBorder,
    o,
    r,
    0,
    0,
    o,
    r
  );

  // Update the original image source with the cropped image data
  this.orig_src.src = e.toDataURL("image/png");

  // Clear the resize image context
  var resizeImageContext = resizeImage.getContext("2d");
  resizeImageContext.clearRect(0, 0, resizeImage.width, resizeImage.height);

  // Update dimensions
  o = Math.ceil(o);
  r = Math.ceil(r);

  this.resize_canvas.width = o;
  this.resize_canvas.height = r;
  this.image_target.width = o;
  this.image_target.height = r;

  resizeImage.setAttribute("width", o);
  resizeImage.setAttribute("height", r);

  // Center the image
  this.centerImage();

  // Draw the cropped image onto the resized canvas
  this.image_target.getContext("2d").drawImage(e, 0, 0);

  // Update the current status with the new image size
  cropEditor.querySelector(".current-status").textContent =
    this.getImageSize().w + "x" + this.getImageSize().h;
};

RoboCrop.prototype.getImageBase64 = function (e) {
  if (document.querySelector("#crop-editor .resize-container")) {
    if (["png", "jpeg", "jpg", "gif", "bmp"].indexOf(e) === -1) {
      return false; // Invalid extension
    }
    if (
      typeof this.image_target === "undefined" ||
      this.image_target === null
    ) {
      return false; // Image target not defined
    }
    return this.image_target.toDataURL("image/" + e); // Return base64 encoded image data
  } else {
    return false; // No resize-container found
  }
};

RoboCrop.prototype.clearImage = function () {
  var resizeImage = document.querySelector("#crop-editor .resize-image");

  if (resizeImage) {
    var ctx = resizeImage.getContext("2d");
    ctx.clearRect(0, 0, resizeImage.width, resizeImage.height);
    this.orig_src.src = resizeImage.toDataURL("image/png");
  }

  var resizeContainer = document.querySelector(
    "#crop-editor .resize-container"
  );
  if (resizeContainer) {
    resizeContainer.remove();
  }

  var currentStatus = document.querySelector("#crop-editor .current-status");
  if (currentStatus) {
    currentStatus.textContent = "";
  }
};

RoboCrop.prototype.addWatermark = function (e) {
  this.busy(!0); // Sets something to indicate that the operation is busy

  // Setting margins and opacity for the watermark
  e.margin_top = 0;
  e.margin_right = 0;
  e.margin_bottom = 0;
  e.margin_left = 0;
  e.opacity = 1;

  var t = this,
    i = new Image();

  i.onload = function () {
    var o = t.image_target.getContext("2d"),
      r = document.querySelector("#crop-editor .resize-image"),
      a = r.width,
      s = r.height;

    o.save();

    var n = e.margin_left - e.margin_right,
      c = e.margin_top - e.margin_bottom;

    // Drawing the watermark based on specified position
    switch (e.position) {
      case "top-left":
        o.drawImage(i, 0 + e.margin_x, 0 + c);
        break;
      case "bottom-left":
        o.drawImage(i, 0 + n, s - i.height + c);
        break;
      case "top-right":
        o.drawImage(i, a - i.width + n, 0 + c);
        break;
      case "center":
        o.drawImage(i, a / 2 - i.width / 2 + n, s / 2 - i.height / 2 + c);
        break;
      case "bottom-right":
        o.drawImage(i, a - i.width + n, s - i.height + c);
        break;
      default:
        o.drawImage(i, a - i.width + n, s - i.height + c);
    }

    o.restore();

    var h = t.imageElement.dataset.ext;
    h = t.validExtension(h ? h : "png");
    t.orig_src.src = t.image_target.toDataURL("image/" + h);
    t.apply(t.orig_src.src);
  };

  // Handling errors related to loading the image
  if (i.addEventListener) {
    i.addEventListener("error", function (e) {
      e.preventDefault();
      return "Error: crossorigin";
    });
  } else {
    i.attachEvent("onerror", function (e) {
      return "Error: crossorigin";
    });
  }

  i.setAttribute("crossOrigin", "anonymous");
  i.src =
    "data:image/png;base64,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";
};

RoboCrop.prototype.rotate = function () {
  this.editorBusy(true);

  // Time to update layout
  setTimeout(
    function () {
      // Rotate based on max size
      var current_w = this.image_target.width;
      var current_h = this.image_target.height;
      this.resizeImage(
        this.image.resolutions.max.w,
        this.image.resolutions.max.h
      );

      var ctx = this.image_target.getContext("2d");
      var w = ctx.canvas.width;
      var h = ctx.canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate((90 * Math.PI) / 180);

      ctx.drawImage(this.orig_src, (h / 2) * -1, (w / 2) * -1, h, w);
      ctx.restore();
      this.orig_src.src = this.image_target.toDataURL("image/png");

      // Resize back to current size
      this.resizeImage(current_h, current_w);

      this.editorBusy(false);

      // Invert dimensions
      var temp = this.image_target.width;
      this.image_target.width = this.image_target.height;
      this.image_target.height = temp;

      temp = this.image.resolutions.max.w;
      this.image.resolutions.max.w = this.image.resolutions.max.h;
      this.image.resolutions.max.h = temp;

      temp = this.image.resolutions.small.w;
      this.image.resolutions.small.w = this.image.resolutions.small.h;
      this.image.resolutions.small.h = temp;

      temp = this.image.resolutions.auto.w;
      this.image.resolutions.auto.w = this.image.resolutions.auto.h;
      this.image.resolutions.auto.h = temp;

      setTimeout(
        function () {
          this.centerImage();
        }.bind(this),
        10
      );
    }.bind(this),
    10
  );
};

RoboCrop.prototype.apply = function (e) {
  document.documentElement.style.overflow = "initial";
  document.body.style.overflow = "initial";
  var cropEditor = document.getElementById("crop-editor");
  if (cropEditor) {
    cropEditor.style.overflow = "initial";
  }
  this.busy(true);

  var imageElement = this.imageElement;
  var ext = imageElement.dataset.ext;
  var validExt = this.validExtension(ext ? ext : "png");

  var base64Image;
  if (typeof e === "undefined" || e === null) {
    base64Image = this.getImageBase64(validExt);
  } else {
    base64Image = e;
  }

  var mimeType = base64Image.substring(5, base64Image.indexOf(";base64"));
  ext = mimeType === "png" ? mimeType : imageElement.dataset.ext;
  var imgElement = imageElement.querySelector("img");
  if (imgElement) {
    imgElement.setAttribute("src", base64Image);
  }

  var nameAttr = imageElement.dataset.name;
  var name =
    typeof nameAttr === "undefined" || nameAttr === null
      ? "crop_image"
      : nameAttr;
  var hiddenInput = imageElement.querySelector("input[type=hidden]");
  if (!hiddenInput) {
    var newHiddenInput = document.createElement("input");
    newHiddenInput.setAttribute("type", "hidden");
    newHiddenInput.setAttribute("name", name);
    imageElement.appendChild(newHiddenInput);
    hiddenInput = newHiddenInput;
  }
  hiddenInput.value = base64Image;

  var base64Header = "data:image/png;base64,";
  var imageSize = this.getImageSize();
  var extraSize = Math.round(
    (3 * (base64Image.length - base64Header.length)) / 4
  );

  this.clearImage();
  this.busy(false);
  imageElement.classList.add("not-empty");
};

var robocrop = new RoboCrop();

document.querySelectorAll(".crop-element").forEach(function (element) {
  var img = element.querySelector("img");
  var url = img
    ? img.getAttribute("src")
      ? img.getAttribute("src")
      : undefined
    : undefined;
  if (url !== undefined && url.length > 0) {
    element.classList.remove("not-empty");
  } else {
    element.classList.add("not-empty");
  }
});

document.addEventListener("click", function (event) {
  if (
    event.target.closest(".btn-crop-tool.flip-x") ||
    event.target.closest(".btn-main-menu-action.flip-x")
  ) {
    robocrop.flipX();
  }
  if (
    event.target.closest(".btn-crop-tool.flip-y") ||
    event.target.closest(".btn-main-menu-action.flip-y")
  ) {
    robocrop.flipY();
  }
  if (
    event.target.closest(".btn-crop-tool.invert") ||
    event.target.closest(".btn-main-menu-action.invert")
  ) {
    robocrop.rotate();
  }
  if (
    event.target.closest(".btn-crop-tool.crop") ||
    event.target.closest(".btn-main-menu-action.crop")
  ) {
    robocrop.toggleCrop();
  }
  if (event.target.matches(".crop-element .edit")) {
    event.preventDefault();
    event.stopPropagation();
    var cropElement = event.target.closest(".crop-element");
    var img = cropElement.querySelector("img");
    var url = img ? img.getAttribute("src") : undefined;
    if (url !== undefined && url.length > 0) {
      var name = url.split("\\").pop();
      var ext = name.split(".").pop();
      if (robocrop.validExtension(ext)) {
        cropElement.dataset.imagename = name;
      }
      robocrop.clearImage();
      robocrop.imageElement = cropElement;
      robocrop.loadImageFromUrl(url);
      document.getElementById("crop-editor").classList.add("open");
    }
  }
});

// Event listener for dragover on #crop-editor
document
  .getElementById("crop-editor")
  .addEventListener("dragover", function (e) {
    e.stopPropagation();
    e.preventDefault();
  });

// Event listener for drop on #crop-editor
document.getElementById("crop-editor").addEventListener("drop", function (e) {
  e.stopPropagation();
  e.preventDefault();

  // Get original image name
  var files = e.dataTransfer.files;
  var file = files.length > 0 ? files[0] : false;

  if (file) {
    var ext = file.name.split(".").pop();
    if (robocrop.validExtension(ext, true)) {
      var cropElement = this.closest(".crop-element");
      if (cropElement) {
        cropElement.dataset.imagename = file.name;
      }
      robocrop.toggleCrop(false); // Turn off crop
      robocrop.clearImage();
      robocrop.dropImage(e);
    } else {
      document.querySelector("#crop-editor .current-status").textContent =
        "Invalid image";
    }
  }
});

// Event listener for clicks on #crop-editor.busy
document.addEventListener("click", function (e) {
  if (e.target.matches("#crop-editor.busy")) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Event listener for clicks on .image-resolutions .img-max
document.addEventListener("click", function (e) {
  if (e.target.matches("#crop-editor .image-resolutions .img-max")) {
    robocrop.resizeImage(
      robocrop.image.resolutions.max.w,
      robocrop.image.resolutions.max.h
    );
    setTimeout(function () {
      robocrop.centerImage();
    }, 10);
  }
});

// Event listener for clicks on .image-resolutions .img-auto
document.addEventListener("click", function (e) {
  if (e.target.matches("#crop-editor .image-resolutions .img-auto")) {
    robocrop.resizeImage(
      robocrop.image.resolutions.auto.w,
      robocrop.image.resolutions.auto.h
    );
    setTimeout(function () {
      robocrop.centerImage();
    }, 10);
  }
});

// Event listener for clicks on .image-resolutions .img-small
document.addEventListener("click", function (e) {
  if (e.target.matches("#crop-editor .image-resolutions .img-small")) {
    robocrop.resizeImage(
      robocrop.image.resolutions.small.w,
      robocrop.image.resolutions.small.h
    );
    setTimeout(function () {
      robocrop.centerImage();
    }, 10);
  }
});

document.addEventListener("click", function (e) {
  if (e.target.matches(".crop-element.busy")) {
    e.preventDefault();
    e.stopPropagation();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.closest("#crop-editor .editor-main-menu .cancel")) {
    robocrop.clearImage();
    document.documentElement.style.overflow = "initial";
    document.body.style.overflow = "initial";
    document.getElementById("crop-editor").classList.remove("open");
  }
});

document.addEventListener("change", function (e) {
  if (e.target.closest(".crop-element input[type=file]")) {
    var name = e.target.value.split("\\").pop();
    var ext = name.split(".").pop();
    if (robocrop.validExtension(ext)) {
      e.target.closest(".crop-element").dataset.imagename = name;
    }
    robocrop.clearImage();
    robocrop.loadImage(e.target);
    document.getElementById("crop-editor").classList.add("open");
  }
});

document.addEventListener("click", function (event) {
  var target = event.target;

  if (target.closest("#crop-editor .editor-main-menu .apply")) {
    if (robocrop.cropValues.enabled) {
      robocrop.crop();
      robocrop.toggleCrop(false);
    }

    // RoboCrop required validation
    var cropRequired = robocrop.imageElement.getAttribute("data-crop-required");
    cropRequired = cropRequired === "true"; // Convert attribute string to boolean
    var resizeImage = document.querySelector("#crop-editor .resize-image");
    var width = resizeImage.clientWidth;
    var height = resizeImage.clientHeight;
    var validWidth = robocrop.validCropSize(width, robocrop.cropValues.width);
    var validHeight = robocrop.validCropSize(
      height,
      robocrop.cropValues.height
    );

    if (cropRequired && (width !== validWidth || height !== validHeight)) {
      document.querySelector("#crop-editor .current-status").textContent =
        "RoboCrop is required";
      return;
    }

    var watermark = robocrop.imageElement.getAttribute("data-watermark");
    if (
      watermark !== undefined &&
      robocrop.watermarks[watermark] !== undefined
    ) {
      robocrop.addWatermark(robocrop.watermarks[watermark]);
    } else {
      robocrop.apply();
    }
    document.querySelector("#crop-editor").classList.remove("open");
  }
});

// IE, Opera, Safari: mousewheel event
document.getElementById("crop-editor").addEventListener("wheel", function (e) {
  if (this.classList.contains("busy")) return;

  var w = parseInt(robocrop.getImageSize().w);
  var h = parseInt(robocrop.getImageSize().h);

  if (e.deltaY < 0) {
    // scroll up
    if (
      w - robocrop.image.zoom.speed > 50 &&
      h - robocrop.image.zoom.speed > 50
    ) {
      robocrop.resizeImage(
        w - robocrop.image.zoom.speed,
        h - robocrop.image.zoom.speed
      );
    }
  } else {
    // scroll down
    robocrop.resizeImage(
      w + robocrop.image.zoom.speed,
      h + robocrop.image.zoom.speed
    );
  }

  robocrop.centerImage();
});

// Firefox: DOMMouseScroll event
document
  .getElementById("crop-editor")
  .addEventListener("DOMMouseScroll", function (e) {
    e.preventDefault(); // prevent page from scrolling

    if (this.classList.contains("busy")) return;

    var w = parseInt(robocrop.getImageSize().w);
    var h = parseInt(robocrop.getImageSize().h);

    if (e.detail > 0) {
      // scroll down
      robocrop.resizeImage(
        w + robocrop.image.zoom.speed,
        h + robocrop.image.zoom.speed
      );
    } else {
      // scroll up
      if (
        w - robocrop.image.zoom.speed > 50 &&
        h - robocrop.image.zoom.speed > 50
      ) {
        robocrop.resizeImage(
          w - robocrop.image.zoom.speed,
          h - robocrop.image.zoom.speed
        );
      }
    }

    robocrop.centerImage();
  });

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
}

function getComputedStyleValue(el, property) {
  return window.getComputedStyle(el)[property];
}

function setOffset(elem, options, i) {
  var curPosition,
    curLeft,
    curCSSTop,
    curTop,
    curOffset,
    curCSSLeft,
    calculatePosition,
    position = getComputedStyleValue(elem, "position"),
    props = {};

  // Set position first, in-case top/left are set even on static elem
  if (position === "static") {
    elem.style.position = "relative";
  }

  curOffset = getOffset(elem);
  curCSSTop = getComputedStyleValue(elem, "top");
  curCSSLeft = getComputedStyleValue(elem, "left");
  calculatePosition =
    (position === "absolute" || position === "fixed") &&
    (curCSSTop + curCSSLeft).indexOf("auto") > -1;

  // Need to be able to calculate position if either
  // top or left is auto and position is either absolute or fixed
  if (calculatePosition) {
    curPosition = {
      top: elem.offsetTop,
      left: elem.offsetLeft,
    };
    curTop = curPosition.top;
    curLeft = curPosition.left;
  } else {
    curTop = parseFloat(curCSSTop) || 0;
    curLeft = parseFloat(curCSSLeft) || 0;
  }

  if (typeof options === "function") {
    options = options.call(elem, i, Object.assign({}, curOffset));
  }

  if (options.top != null) {
    props.top = options.top - curOffset.top + curTop + "px";
  }
  if (options.left != null) {
    props.left = options.left - curOffset.left + curLeft + "px";
  }

  if ("using" in options) {
    options.using.call(elem, props);
  } else {
    Object.assign(elem.style, props);
  }
}

function hasClass(element, className) {
  return element.classList.contains(className);
}