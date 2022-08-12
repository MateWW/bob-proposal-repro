import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-repro-for-issue' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const ReproForIssueModule = isTurboModuleEnabled
  ? require('./NativeReproForIssue').default
  : NativeModules.ReproForIssue;

const ReproForIssue = ReproForIssueModule
  ? ReproForIssueModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ReproForIssue.multiply(a, b);
}
