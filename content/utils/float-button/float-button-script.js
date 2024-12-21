export class FloatingElement {
  constructor(element, zIndex) {
    this.element = element;
    this.zIndex = zIndex;
    this.offset = { x: 0, y: 0 };
    this.isActive = true;
    this.boundHandleMouseDown = this.handleMouseDown.bind(this);
    this.boundHandleMouseMove = this.handleMouseMove.bind(this);
    this.boundHandleMouseUp = this.handleMouseUp.bind(this);
  }

  /**
   * Updates the element's position based on mouse coordinates
   * @param {number} x - Page X coordinate
   * @param {number} y - Page Y coordinate
   */
  updatePosition(x, y) {
    this.element.style.left = `${x - this.offset.x}px`;
    this.element.style.top = `${y - this.offset.y}px`;
  }

  /**
   * Calculates initial offset when dragging starts
   * @param {MouseEvent} event
   */
  calculateOffset(event) {
    const rect = this.element.getBoundingClientRect();
    this.offset = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  /**
   * Sets up the element for floating behavior
   */
  initializeFloatingProperties() {
    this.element.style.position = "fixed";
    this.element.style.zIndex = this.zIndex;
  }

  /**
   * Handles the mousedown event
   * @param {MouseEvent} event
   */
  handleMouseDown(event) {
    if (!this.isActive || window.isChatFloating === false) {
      return;
    }

    this.calculateOffset(event);
    this.initializeFloatingProperties();
    this.updatePosition(event.pageX, event.pageY);

    // Add movement and cleanup listeners
    document.addEventListener("mousemove", this.boundHandleMouseMove);
    document.addEventListener("mouseup", this.boundHandleMouseUp);

    // Prevent text selection while dragging
    document.body.style.userSelect = "none";
    document.body.style.overflowX = "hidden";
  }

  /**
   * Handles the mousemove event
   * @param {MouseEvent} event
   */
  handleMouseMove(event) {
    this.updatePosition(event.pageX, event.pageY);
  }

  /**
   * Handles the mouseup event
   */
  handleMouseUp() {
    // Remove movement listeners
    document.removeEventListener("mousemove", this.boundHandleMouseMove);
    document.removeEventListener("mouseup", this.boundHandleMouseUp);

    // Restore default body styles
    document.body.style.userSelect = "auto";
    document.body.style.overflowX = "auto";
  }

  /**
   * Starts the floating behavior
   */
  enable() {
    this.isActive = true;
    this.element.addEventListener("mousedown", this.boundHandleMouseDown);
  }

  /**
   * Stops the floating behavior
   */
  disable() {
    this.isActive = false;
    this.element.removeEventListener("mousedown", this.boundHandleMouseDown);
  }

  /**
   * Cleans up all event listeners
   */
  destroy() {
    this.disable();
    this.handleMouseUp();
  }
}
