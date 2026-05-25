import pandas as pd

# LOAD DATA
df = pd.read_csv("dataset.csv")

# =========================
# MEMBERSIHKAN SALARY
# =========================

df["Salary"] = (
    df["Salary"]
    .astype(str)
    .str.replace("$","", regex=False)
    .str.replace(",","", regex=False)
)

df["Salary"] = pd.to_numeric(
    df["Salary"],
    errors="coerce"
)

# =========================
# HAPUS DATA KOSONG
# =========================

df = df.dropna(
    subset=[
        "Salary",
        "Job_Sector",
        "Education_Level",
        "Employment_Status"
    ]
)

# =========================
# MEMBERSIHKAN KATEGORI
# =========================

df["Job_Sector"] = (
    df["Job_Sector"]
    .str.strip()
    .str.title()
)

df["Employment_Status"] = (
    df["Employment_Status"]
    .str.strip()
)

# =========================
# SIMPAN DATA BERSIH
# =========================

df.to_csv(
    "cleaned_dataset.csv",
    index=False
)

print("Preprocessing selesai!")
print(df.head())