#ifdef RCT_NEW_ARCH_ENABLED
#import "RNReproForIssueSpec.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#ifdef RCT_NEW_ARCH_ENABLED
@interface ReproForIssue : NSObject <NativeReproForIssueSpec>
#else
@interface ReproForIssue : NSObject <RCTBridgeModule>
#endif

@end
