package com.reactnativereproforissue;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ReproForIssueModule extends ReactContextBaseJavaModule {
  public static final String NAME = ReproForIssueModuleImpl.NAME;

  ReproForIssueModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public String getName() {
    return ReproForIssueModuleImpl.NAME;
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(double a, double b, Promise promise) {
    ReproForIssueModuleImpl.multiply(a, b, promise);
  }
}
