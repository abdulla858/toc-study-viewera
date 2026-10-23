import ctypes
from ctypes import wintypes
import subprocess
import os

class CREDENTIAL(ctypes.Structure):
    _fields_ = [
        ('Flags', wintypes.DWORD),
        ('Type', wintypes.DWORD),
        ('TargetName', wintypes.LPWSTR),
        ('Comment', wintypes.LPWSTR),
        ('LastWritten', wintypes.FILETIME),
        ('CredentialBlobSize', wintypes.DWORD),
        ('CredentialBlob', ctypes.POINTER(ctypes.c_char)),
        ('Persist', wintypes.DWORD),
        ('AttributeCount', wintypes.DWORD),
        ('Attributes', ctypes.c_void_p),
        ('TargetAlias', wintypes.LPWSTR),
        ('UserName', wintypes.LPWSTR),
    ]

PCREDENTIAL = ctypes.POINTER(CREDENTIAL)
advapi32 = ctypes.windll.advapi32
advapi32.CredReadW.argtypes = [wintypes.LPCWSTR, wintypes.DWORD, wintypes.DWORD, ctypes.POINTER(PCREDENTIAL)]
advapi32.CredReadW.restype = wintypes.BOOL
advapi32.CredFree.argtypes = [ctypes.c_void_p]

pcred = PCREDENTIAL()
token = None
if advapi32.CredReadW('git:https://github.com', 1, 0, ctypes.byref(pcred)):
    blob = ctypes.string_at(pcred.contents.CredentialBlob, pcred.contents.CredentialBlobSize)
    token = blob.decode('utf-16le').strip()
    advapi32.CredFree(pcred)

if not token:
    print("Could not read token from Credential Manager")
    exit(1)

auth_url = f"https://abdulla858:{token}@github.com/abdulla858/toc-study-viewera.git"
clean_url = "https://github.com/abdulla858/toc-study-viewera.git"

subprocess.run(["git", "add", "."], check=True)
subprocess.run(["git", "commit", "-m", "Verify exact 435 slides across L1-L9 and PDA, add 59-quiz & 15-visual diagram models"], check=True)

try:
    subprocess.run(["git", "remote", "set-url", "origin", auth_url], check=True)
    print("Pushing to main...")
    subprocess.run(["git", "push", "origin", "main"], check=True)
    print("Pushing to master...")
    subprocess.run(["git", "push", "origin", "main:master", "--force"], check=True)
    print("Pushed to main and master successfully!")
finally:
    subprocess.run(["git", "remote", "set-url", "origin", clean_url], check=True)
