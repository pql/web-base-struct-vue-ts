export declare class MessageParam {
  type: string;
  message: string
}

export declare interface Message {
  (messageParam : MessageParam): void;
}

