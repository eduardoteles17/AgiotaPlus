package dev.eduardoteles.agiotaplus.models

import java.math.BigDecimal

data class Debit(
    val name: String,
    val total: BigDecimal,
    val isCompleted: Boolean
)
