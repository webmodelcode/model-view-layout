window.MakeElementFloating = class {
  shiftX;
  shiftY;

  constructor(elm, zIndex) {
    this.elm = elm;
    this.zIndex = zIndex;
  }

  moveAt(pageX, pageY, ref) {
    ref.elm.style.left = pageX - ref.shiftX + "px";
    ref.elm.style.top = pageY - ref.shiftY + "px";
  }

  mainMovement(event, ref) {
    function initPosition() {
      ref.shiftX = event.clientX - ref.elm.getBoundingClientRect().left;
      ref.shiftY = event.clientY - ref.elm.getBoundingClientRect().top;
    }

    function shiftProperties() {
      ref.elm.style.position = "absolute";
      ref.elm.style.zIndex = ref.zIndex;
      // document.body.append(ref.elm);
    }

    function onTouchmove(e) {
      document.body.style.userSelect = "none";
      document.body.style.overflowX = "hidden";
      ref.moveAt(e.pageX, e.pageY, ref);
    }

    function onTouchend() {
      document.body.style.userSelect = "auto";
      document.body.style.overflowX = "auto";
      document.removeEventListener("mousemove", onTouchmove);
      initPosition();
    }

    initPosition(event);
    shiftProperties();
    ref.moveAt(event.pageX, event.pageY, ref);
    document.addEventListener("mousemove", onTouchmove);
    document.addEventListener("mouseup", onTouchend);
  }

  goMoveIt(ref) {
    this.elm.addEventListener("mousedown", function (e) {
      ref.mainMovement(e, ref);
    });
  }
};
