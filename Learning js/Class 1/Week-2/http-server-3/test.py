from collections import Counter

def minWindow(s: str, t: str) -> str:
    if not t or not s:
        return ""
    
    dict_t = Counter(t)
    required = len(dict_t)
    
    left, right = 0, 0
    formed = 0
    
    window_counts = {}
    
    ans = float("inf"), None, None
    
    while right < len(s):
        char = s[right]
        window_counts[char] = window_counts.get(char, 0) + 1
        
        if char in dict_t and window_counts[char] == dict_t[char]:
            formed += 1
        
        while left <= right and formed == required:
            char = s[left]
            
            if right - left + 1 < ans[0]:
                ans = (right - left + 1, left, right)
            
            window_counts[char] -= 1
            if char in dict_t and window_counts[char] < dict_t[char]:
                formed -= 1
            
            left += 1
        
        right += 1
    
    return "" if ans[0] == float("inf") else s[ans[1]: ans[2] + 1]

# Example usage
s = "a"
t = "aa"
print(minWindow(s, t))  # Output: "BANC"
