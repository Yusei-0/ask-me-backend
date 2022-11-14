export class PriorityQueue{

  elements: any[];

  constructor(){
    this.elements = [];
  }

  esVacia(){
    if(this.elements.length == 0)
    return true;
    else return false;
}

  add( element){

    this.elements.push(element);
    this.flotar(this.elements.length-1);
}

  flotar(pos){

    while (pos>0) {

     let padre= (pos-1)/2; 

      if(this.elements[padre].compareTo(this.elements[pos]) > 0){

          let aux=this.elements[pos];
            this.elements[pos] = this.elements[padre];
            this.elements[padre]=aux;
            pos = padre;
        }
      else
          pos=-1;
        
    }

}

  hundir( pos){

  while(pos < this.elements.length / 2){
        let hijo = 2 * pos + 1;
        if(2 * pos+ 2 < this.elements.length && this.elements[hijo].compareTo(this.elements[hijo + 1]) > 0)
            ++hijo; 
        if(this.elements[pos].compareTo(this.elements[hijo]) > 0){
            let aux=this.elements[pos];
            this.elements[pos] = this.elements[hijo];
            this.elements[hijo]=aux;
            pos = hijo;
        }
        else pos=this.elements.length;      
   }  
}

 minimo(){    
    return this.elements[0];
}


  eliminarMin(){
    let min=this.elements[0];
    this.elements[0]=this.elements[this.elements.length-1];
    this.hundir(0);
    return min;
}

}