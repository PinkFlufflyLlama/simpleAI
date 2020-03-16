//import { GPU, IKernelRunShortcut } from "gpu.js";

class Node {

   public weights: Number[];
   public bias = 0;
   public value = 0;
   
   constructor (previousLayer?: Layer) {

      this.weights = []
      if (!(typeof previousLayer == "undefined")) {
         for (let i=0; i != previousLayer.nodes.length; ++i) {
            this.weights.push(0);
         }
      }
   }
}

class Layer {
   
   // Declare Variables
   public nodes: Node[];

   constructor (amountOfNodes: Number, previousLayer?: Layer) {
      

      this.nodes = [];
      for (let i = 0; i != amountOfNodes; ++i) {
         this.nodes.push(new Node(previousLayer));
      }

   }
}

class SimpleAI {

   // Declare Variables
   private activationFunction: Function; //(x : number) => number;
   private weightsRandom: Function; //() => number;
   private biasRandom: Function; //() => number;
   private trainingRandom: Function; //() => number;
   private layerSizes: Number[];
   private network: Layer[];

   constructor(layerSizes: number[]) {

      this.layerSizes = layerSizes;

      this.activationFunction = (x: number) => {
         return Math.sin(x * 3);
      };
      this.weightsRandom = () => {
         return Math.random();
      };
      this.biasRandom = () => {
         return (Math.random() - 0.5);
      };
      this.trainingRandom = () => {
         return 100 / (Math.random() - 0.5);
      };

      this.network = [];
      for (let i=0; i!=layerSizes.length; ++i) {
         if (i == 0) {
            this.network.push(new Layer(layerSizes[i]));
         } else {
            this.network.push(new Layer(layerSizes[i], this.network[i-1]));
         }
      }

   };

   /**
    * 
    * @param {Function} activationFunction 
    */
   setActivationFunction(activationFunction: Function): void {
      this.activationFunction = activationFunction;
   };

   /**
    * 
    * @param {Function} weightsRandomFunction 
    */
   setWeightsRandom(weightsRandomFunction: Function): void {
      this.weightsRandom = weightsRandomFunction
   };


   
}

class Batch {

}

const Exporter = {
   SimpleAI : SimpleAI,
   Batch : Batch
};



export default Exporter;