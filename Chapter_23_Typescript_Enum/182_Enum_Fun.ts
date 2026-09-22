enum Severity {
    Low,
    Medium,
    High,
    Critical
}

console.log(Severity.High);

function needsImmediateAttention(severity: Severity): boolean {
    return severity >= Severity.High;
}

console.log("Low urgent?", needsImmediateAttention(Severity.Low));
console.log("Critical urgent?", needsImmediateAttention(Severity.Critical));
console.log("Severity name:", Severity[2]);

enum Environment {
    Dev = "https://api.com",
    Staging = "https://api.com",
    QA = "https://api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);