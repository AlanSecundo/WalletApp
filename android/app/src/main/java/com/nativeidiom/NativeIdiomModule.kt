package com.nativeidiom

import android.content.Context
import android.os.LocaleList
import android.os.Build
import com.nativeidiom.NativeIdiomSpec
import com.facebook.react.bridge.ReactApplicationContext
import java.util.Locale

class NativeIdiomModule(reactContext: ReactApplicationContext): NativeIdiomSpec(reactContext) {
    override fun getName() = NAME

    override fun getCurrentIdiom(): String? {
        val locale = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            LocaleList.getDefault()[0]
        } else {
            Locale.getDefault()
        }
    
        return "${locale.displayLanguage.capitalize()} - ${locale.displayCountry.capitalize()}"
    }

    companion object {
        const val NAME = "NativeIdiom"
      }
    
}
