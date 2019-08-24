export interface FacesRecognized {
  time_used: number;
  faces: Face[];
  image_id: string;
  request_id: string;
  face_num: number;
}

export interface Face {
  attributes: Attributes;
  face_rectangle: FaceRectangle;
  face_token: string;
}

interface FaceRectangle {
  width: number;
  top: number;
  left: number;
  height: number;
}

interface Attributes {
  emotion: Emotion;
  gender: Gender;
  age: Age;
  headpose: Headpose;
  smile: Smile;
}

interface Smile {
  threshold: number;
  value: number;
}

interface Headpose {
  yaw_angle: number;
  pitch_angle: number;
  roll_angle: number;
}

interface Age {
  value: number;
}

interface Gender {
  value: string;
}

interface Emotion {
  sadness: number;
  neutral: number;
  disgust: number;
  anger: number;
  surprise: number;
  fear: number;
  happiness: number;
}
