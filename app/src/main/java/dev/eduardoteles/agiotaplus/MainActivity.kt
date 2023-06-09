package dev.eduardoteles.agiotaplus

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import dev.eduardoteles.agiotaplus.screens.HomeScreen
import dev.eduardoteles.agiotaplus.ui.theme.AgiotaPlusTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AgiotaPlusTheme {
                HomeScreen()
            }
        }
    }
}
