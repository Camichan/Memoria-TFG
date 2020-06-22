// define class
class VisController {
   constructor(el, vis) {
      console.log('Creating...');
      this.el = el;
      this.vis = vis;

      this.container = document.createElement('div');
      this.container.className = 'myvis-container-div';
      this.el.appendChild(this.container);
   }
