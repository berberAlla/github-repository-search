import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';

export class MessageService {
  constructor(private compResolver: ComponentFactoryResolver){}

  messageContainer: ViewContainerRef;
  messageComponent: any;
  messageText: string = '';
  createMessage(messageObject: any){
    this.messageContainer = messageObject.container;
    this.messageComponent = messageObject.component;
    this.messageText = messageObject.text;
    const compFactory = this.compResolver.resolveComponentFactory(this.messageComponent);
    const comp = this.messageContainer.createComponent(compFactory);
    this.showMessage(comp);
  }

  showMessage(component: any){
    component.instance['text'] = this.messageText;
    this.hideMessage(this.messageContainer);
  }

  hideMessage(containerRef: ViewContainerRef){
    setTimeout(() => {
      containerRef.clear();
    }, 5000);
  }
}
