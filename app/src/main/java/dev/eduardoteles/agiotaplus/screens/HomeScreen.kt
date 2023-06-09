package dev.eduardoteles.agiotaplus.screens

import android.annotation.SuppressLint
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.outlined.Settings
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import dev.eduardoteles.agiotaplus.models.Debit


@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen() {
    val debits = listOf<Debit>(
        Debit(
            name = "Mac Book Air",
            total = 56000.toBigDecimal(),
            isCompleted = false,
        ),
        Debit(
            name = "Celular",
            total = 2300.toBigDecimal(),
            isCompleted = true
        )
    )

    Scaffold(
        topBar = {
            LargeTopAppBar(
                title = {
                    Text(text = "Agiota Plus")
                },
                navigationIcon = {
                    IconButton(
                        onClick = {/* TODO */ }
                    ) {
                        Icon(Icons.Outlined.Settings, contentDescription = "Settings")
                    }
                },
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = {/* TODO */ }
            ) {
                Icon(Icons.Filled.Add, contentDescription = "")
            }
        }

    ) {
        LazyColumn(
            modifier = Modifier.padding(it)
        ) {
            items(debits.size) { currentDebit ->
                val debit = debits[currentDebit]
                ListItem(
                    headlineContent = {
                        Text(text = debit.name)
                    },
                    trailingContent = {
                        Badge(
                            contentColor = Color.White,
                            containerColor = when (debit.isCompleted) {
                                true -> Color.Green
                                false -> Color.Red
                            }
                        ) {
                            Text(
                                text = when (debit.isCompleted) {
                                    true -> "Paid out"
                                    false -> "In progress"
                                }
                            )
                        }
                    }
                )
            }
        }
    }
}

@Preview
@Composable
fun HomeScreenPreview() {
    HomeScreen()
}