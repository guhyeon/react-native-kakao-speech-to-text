import { NativeModules } from 'react-native';

type KakaoSpeechToTextType = {
  multiply(a: number, b: number): Promise<number>;
};

const { KakaoSpeechToText } = NativeModules;

export default KakaoSpeechToText as KakaoSpeechToTextType;
