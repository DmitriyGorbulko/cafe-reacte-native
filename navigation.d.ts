import { RootStackParamList } from './RootStackParam';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}