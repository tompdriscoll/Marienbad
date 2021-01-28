def merge_sort(arr)

    if arr.length <= 1
        return arr
    else
        mid = arr.length / 2
        left = merge_sort(arr.slice(0...mid))
        right = merge_sort(arr.slice(mid...arr.length))
        merge(left, right)
    end
end

def merge(left, right)
    
end