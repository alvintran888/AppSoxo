Gradle' cleaning in the end (in /android folder):
```bash
./gradlew clean
```


$ cd ios
$ rm -rf Podfile.lock
$ pod install


Adding fonts:

npx react-native-asset


Fix lỗi react-native-i18n trên android

vảo thư mục /node_modules/react-native-i18n/android/build.gradle
sửa
 
 dependencies {
-  compile "com.facebook.react:react-native:+" // From node_modules
+  implementation "com.facebook.react:react-native:+" // From node_modules
 }